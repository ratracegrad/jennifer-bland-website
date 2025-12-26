<script setup lang="ts">
type Event = {
  title: string
  date: string
  location: string
  url?: string
  description?: string
  category: 'Keynote Speaker' | 'Conference' | 'Workshop' | 'Meetup' | 'Panel'
}

const { data: page } = await useAsyncData('speaking', () => {
  return queryCollection('speaking').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})

const groupedEvents = computed((): Record<Event['category'], Event[]> => {
  const events = (page.value?.events || []) as Event[]
  const validCategories: Event['category'][] = [
    'Keynote Speaker',
    'Conference',
    'Workshop',
    'Meetup',
    'Panel'
  ]
  const grouped: Record<Event['category'], Event[]> = {
    'Keynote Speaker': [],
    'Conference': [],
    'Workshop': [],
    'Meetup': [],
    'Panel': []
  }
  for (const event of events) {
    // Normalize category: capitalize first letter if needed
    const normalizedCategory = event.category.charAt(0).toUpperCase() + event.category.slice(1).toLowerCase()
    // Handle "Keynote Speaker" special case
    const category = (normalizedCategory === 'Keynote speaker' ? 'Keynote Speaker' : normalizedCategory) as Event['category']
    if (validCategories.includes(category)) {
      grouped[category].push(event)
    }
  }
  return grouped
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"

      :ui="{
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <template #description>
        <p class="text-2xl font-semibold text-left">
          Speaker Bio:
        </p>
        <MDC
          :value="page.description"
        />
      </template>
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <div
        v-for="(eventsInCategory, category) in groupedEvents"
        :key="category"
        class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 mb-16 last:mb-0"
      >
        <div class="lg:col-span-1 mb-4 lg:mb-0">
          <h2
            class="lg:sticky lg:top-16 text-xl font-semibold tracking-tight text-highlighted"
          >
            {{ category.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()) }}s
          </h2>
        </div>

        <div class="lg:col-span-2 space-y-8">
          <div
            v-for="(event, index) in eventsInCategory"
            :key="`${category}-${index}`"
            class="group relative pl-6 border-l border-default"
          >
            <div class="mb-1 text-sm font-medium text-muted">
              <span>{{ event.location }}</span>
            </div>

            <h3 class="text-lg font-semibold text-highlighted">
              {{ event.title }}
            </h3>

            <MDC
              v-if="event.description"
              :value="event.description"
              unwrap="p"
            />
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
