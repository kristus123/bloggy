<template>
  <article>
    <h1 class="mb-8">{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    console.log(params.slug)
    return {
      page: await $content(params.folder, params.name).fetch()
    }
  }
}
</script>