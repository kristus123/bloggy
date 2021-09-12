<template>
  <div>
    <center>
      <v-text-field
      style="max-width:50rem;"
      class="mx-10 mb-10"
      :placeholder="`Search through all ${$route.params.folder != null ? $route.params.folder : 'all'} posts here`"
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
      query: null,
      articles: [],
    };
  },
  methods: {
    async fetchBlogs() {
      this.articles = await this.$content(this.folder, { deep: true })
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
        .limit(50)
        .search(this.query != "" ? this.query : null)
        .skip(0) // todo reimplement
        .fetch()
    }
  },
  watch: {
    async query(query) {
      this.fetchBlogs()
    },
  },
  beforeMount() {
    this.fetchBlogs()
  }
};
</script>