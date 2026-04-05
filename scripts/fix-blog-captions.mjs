/**
 * Convert escaped WordPress [caption]...[/caption] shortcodes to Markdown image + italic caption.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const blogDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'content', 'blog')

// \[caption ...]![alt](url) caption text\[/caption\]  (escaped brackets in .md source)
const captionRe =
  /\\\[caption[^\]]*](\!\[[^\]]*]\([^)]+\))\s*([^\\]+?)\\\[\/caption\\]/g

async function main() {
  const names = (await fs.readdir(blogDir)).filter((n) => n.endsWith('.md'))
  let n = 0
  for (const name of names) {
    const p = path.join(blogDir, name)
    let text = await fs.readFile(p, 'utf8')
    const next = text.replace(captionRe, (_, img, cap) => `${img}\n\n*${cap.trim()}*`)
    if (next !== text) {
      await fs.writeFile(p, next, 'utf8')
      n++
    }
  }
  console.log(`Updated ${n} files with caption shortcodes.`)
}

main()
