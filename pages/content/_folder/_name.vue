<template>
  <article class="">
    <center>
      <TextTitle :title="page.title" />
      <p class="grey--text mb-2">{{page.description}}</p>
      <p class="mt-4 grey--text font-weight-thin">
        {{new Date(page.createdAt).toLocaleString("default", {month: "long"})}} - {{new Date(page.createdAt).getFullYear()}}
      </p>
    </center>
    <nuxt-content :document="page" />
      <center style="margin-top:20vh;">
        <v-img :src="page.coverImage"></v-img>
      </center>
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