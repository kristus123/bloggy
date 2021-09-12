<template>
  <div>
    <center>
      <v-text-field
      style="max-width:50rem;"
      class="mx-10 mb-10"
      :placeholder="`Search through all ${$route.params.folder} posts here`"
      filled
      v-model="query"
      type="search"
      autocomplete="off"
    ></v-text-field>
    </center>
    
      <DisplayPosts :articles="articles" />
  </div>
</template>

<script>
export default {
  props: ['folder'],
  data() {
    return {
      query: '',
      articles: [],
    };
  },

  watch: {
    async query(query) {
      if (query == null || query == '') {
        this.articles = []
      } else {
        this.articles = await this.$content(this.folder == 'all' ? null : this.folder, { deep: true })
        .only([
          "title",
          "description",
          "pathPrefix",
          "slug",
          "tags",
          "coverImage",
          "readButton",
        ])
        .sortBy("createdAt", "asc")
        .search(this.query)
        .limit(50)
        .skip(0) // todo reimplement
        .fetch()
      }
    },
  },

};
</script>