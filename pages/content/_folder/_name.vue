<template>
  <article>
    <center>
      <h1 class="mb-8 mt-4 display-4 font-weight-thin">{{ page.title }}</h1>
      <p class="grey--text mb-12">{{page.description}}</p>
    </center>
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