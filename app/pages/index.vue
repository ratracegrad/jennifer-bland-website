<script setup lang="ts">
const [{ data: page }, { data: posts }] = await Promise.all([
  useAsyncData('index', () => queryCollection('index').first()),
  useAsyncData('index-blogs', () =>
    queryCollection('blog').order('date', 'DESC').limit(3).all()
  )
])

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
if (!posts.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog posts not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <!-- <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8'
      }"
    >
      <LandingAbout :page />
      <LandingWorkExperience :page />
    </UPageSection> -->
    <LandingBlog
      :page
      :posts="posts"
    />
    <!-- <LandingTestimonials :page /> -->
    <!-- <LandingFAQ :page /> -->
  </UPage>
</template>
