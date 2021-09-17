<template>
  <article class="">
    <center>
      <TextTitle :title="page.title" />
      <p class="grey--text mt-2 mb-2">{{page.description}}</p>
      <p class="my-6 grey--text font-weight-thin">
        {{new Date(page.createdAt).toLocaleString("default", {month: "long"})}} - {{new Date(page.createdAt).getFullYear()}}
      </p>
    </center>
    <nuxt-content  :document="page" />
      <center style="margin-top:10vh;">
        <v-img max-width="40rem" max-height="40rem" :src="page.coverImage"></v-img>
      </center>
  </article>
</template>

<script>
export default {

  mounted() {
    this.$gtag.event('read_article', { method: 'Google' })
  },

  async asyncData ({ $content, params, }) {
    return {
      page: await $content(params.folder, params.name).fetch()
    }
  }
}
</script>