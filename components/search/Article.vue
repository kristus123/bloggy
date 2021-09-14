<template>
  <div>
    <center>
      <v-text-field
      style="max-width:50rem;"
      class="mx-10 mb-10"
      :placeholder="`Search in ${$route.params.folder} posts`"
      filled
      v-model="query"
      type="search"
      autocomplete="off"
    ></v-text-field>
    </center>
    <center>
      <v-progress-circular
      v-if="articles == null"
      :size="300"
      :width="1"
      color="blue"
      indeterminate
    ></v-progress-circular>
    </center>
      <DisplayPosts :articles="articles" />
      
  </div>
</template>

<script>
export default {
  props: ['folder'],
  data() {
    return {
      query: 'beforeMount',
      articles: null,
    };
  },

  beforeMount() {
    this.query = this.$route.query.search
  },

  watch: {
    async query(query) {
      this.fetchArticles()
    },
  },

  methods: {
    async fetchArticles() {
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
  }

};
</script>