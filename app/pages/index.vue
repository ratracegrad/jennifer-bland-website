<script setup lang="ts">
const [{ data: page }, { data: posts }] = await Promise.all([
  useAsyncData('index', () => queryCollection('index').first()),
  useAsyncData('index-blogs', () =>
    queryCollection('blog').order('date', 'DESC').limit(3).all()
  )
])

const pageData = page.value
if (!pageData) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const blogPosts = posts.value
if (!blogPosts) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog posts not found',
    fatal: true
  })
}

useSeoMeta({
  title: pageData.seo?.title || pageData.title,
  ogTitle: pageData.seo?.title || pageData.title,
  description: pageData.seo?.description || pageData.description,
  ogDescription: pageData.seo?.description || pageData.description
})
</script>

<template>
  <UPage>
    <LandingHero :page="pageData" />
    <LandingBlog
      :page="pageData"
      :posts="blogPosts"
    />
  </UPage>
</template>
