/**
 * Convert WordPress-style HTML in content/blog/*.md to Markdown.
 * Splits the body on markdown fenced code blocks (```) and runs turndown only on
 * non-fence segments so existing code blocks and examples are never mangled.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const blogDir = path.join(__dirname, '..', 'content', 'blog')

const HTML_TAG_RE =
  /<(?:h[1-6]\b|ul\b|ol\b|li\b|p\b|div\b|span\b|img\b|pre\b|blockquote\b|table\b|thead\b|tbody\b|tr\b|td\b|th\b|a\b|br\b|hr\b|strong\b|b\b|em\b|i\b|code\b|del\b|sub\b|sup\b|caption\b|figure\b|figcaption\b|section\b|iframe\b|xmp\b)/i

function splitFrontmatter(raw) {
  if (!raw.startsWith('---\n')) {
    return { frontmatter: '', body: raw, hasYaml: false }
  }
  const end = raw.indexOf('\n---\n', 4)
  if (end === -1) {
    return { frontmatter: '', body: raw, hasYaml: false }
  }
  return {
    frontmatter: raw.slice(0, end + 5),
    body: raw.slice(end + 5).replace(/^\n/, ''),
    hasYaml: true,
  }
}

/** Split markdown body into alternating text and fenced code segments. */
function splitFences(body) {
  const lines = body.split(/\r?\n/)
  const parts = []
  let buffer = []
  let inCode = false
  let codeLines = []
  let codeLang = ''

  const flushText = () => {
    if (buffer.length) {
      parts.push({ type: 'text', content: buffer.join('\n') })
      buffer = []
    }
  }

  for (const line of lines) {
    if (!inCode && /^```/.test(line)) {
      flushText()
      inCode = true
      codeLang = line.replace(/^```/, '').trim()
      codeLines = []
      continue
    }
    if (inCode && /^```\s*$/.test(line)) {
      parts.push({ type: 'code', lang: codeLang, content: codeLines.join('\n') })
      inCode = false
      continue
    }
    if (inCode) {
      codeLines.push(line)
    } else {
      buffer.push(line)
    }
  }
  flushText()
  if (inCode) {
    parts.push({ type: 'code', lang: codeLang, content: codeLines.join('\n') })
  }
  return parts
}

function escapeForPreCode(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function preprocessHtmlSegment(text) {
  const comments = []
  let out = text.replace(/<!--([\s\S]*?)-->/g, (full) => {
    comments.push(full)
    return `\n\n[[[BLOG_MD_COMMENT_${comments.length - 1}]]]\n\n`
  })
  out = out.replace(/<pre[^>]*>\s*<xmp>([\s\S]*?)<\/xmp>\s*<\/pre>/gi, (_, inner) => {
    return `<pre><code>${escapeForPreCode(inner)}</code></pre>`
  })
  out = out.replace(/<xmp>([\s\S]*?)<\/xmp>/gi, (_, inner) => {
    return `<pre><code>${escapeForPreCode(inner)}</code></pre>`
  })
  return { text: out, comments }
}

function restoreComments(md, comments) {
  return md.replace(/\[\[\[BLOG_MD_COMMENT_(\d+)\]\]\]/g, (_, i) => comments[Number(i)] ?? '')
}

function convertHtmlSegment(segment) {
  const { text: pre, comments } = preprocessHtmlSegment(segment)
  if (!HTML_TAG_RE.test(pre)) {
    return restoreComments(pre, comments)
  }
  const turndownService = new TurndownService({
    headingStyle: 'atx',
    bulletListMarker: '-',
    codeBlockStyle: 'fenced',
    fence: '```',
    emDelimiter: '_',
  })
  turndownService.use(gfm)
  let md = turndownService.turndown(`<div>${pre}</div>`).trim()
  md = restoreComments(md, comments)
  return md.replace(/\n{3,}/g, '\n\n')
}

function rebuildBody(parts) {
  const out = []
  for (const p of parts) {
    if (p.type === 'text') {
      out.push(convertHtmlSegment(p.content))
    } else {
      const lang = p.lang ? p.lang : ''
      out.push('```' + lang + (lang ? '\n' : '') + p.content + '\n```')
    }
  }
  return out.join('\n\n') + '\n'
}

function processBody(body) {
  const parts = splitFences(body)
  if (parts.length === 1 && parts[0].type === 'text' && !HTML_TAG_RE.test(parts[0].content)) {
    return null
  }
  return rebuildBody(parts)
}

async function main() {
  const names = (await fs.readdir(blogDir)).filter((n) => n.endsWith('.md')).sort()
  let converted = 0
  let skipped = 0

  for (const name of names) {
    const filePath = path.join(blogDir, name)
    const raw = await fs.readFile(filePath, 'utf8')
    const { frontmatter, body, hasYaml } = splitFrontmatter(raw)
    const newBody = processBody(body)
    if (newBody === null) {
      skipped++
      continue
    }
    const out = hasYaml ? `${frontmatter}\n${newBody}` : newBody
    await fs.writeFile(filePath, out, 'utf8')
    converted++
  }

  console.log(`Converted: ${converted}, skipped (no HTML in prose): ${skipped}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
