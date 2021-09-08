<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    return {
      page: await $content('blogs', params.slug).fetch()
    }
  }
}
</script>