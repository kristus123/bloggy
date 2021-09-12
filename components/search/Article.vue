<template>
  <div>
    <v-text-field
      placeholder="Search through all articles here"
      filled
      v-model="query"
      type="search"
      autocomplete="off"
    ></v-text-field>
    
      <DisplayPosts :articles="articles" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      articles: [],
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = [];
        return;
      }

      this.articles = await this.$content({ deep: true })
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
        .limit(12)
        .search(query)
        .fetch();
    },
  },
};
</script>