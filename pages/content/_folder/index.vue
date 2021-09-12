<template>
  <div>
    <center class="my-5">
      <p class="grey--text ma-0 mb-2 pa-0">sort by tags</p>
      <v-chip
        small
        class="mx-4"
        dark
        v-for="tag in tags"
        v-bind:key="tag"
        :color="
          $store.state.tagSearches.tags.includes(tag)
            ? 'green darken-1'
            : 'grey'
        "
        @click="() => queryAfterTag(tag)"
        >{{ tag }}</v-chip
      >
    </center>

    <DisplayPosts :articles="articles" />

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["microservices", "clean code"],
      query: null,
      skip: 0,
      x: [],
      articles: [],
    };
  },

  methods: {
    async fetchBlogs() {
      this.articles = await this.$content(this.$route.params.folder, {
        deep: true,
      })
        .only([
          "title",
          "description",
          "pathPrefix",
          "slug",
          "tags",
          "coverImage",
          "readButton",
        ])
        .sortBy("createdAt", "desc")
        .limit(50)
        .skip(this.skip)
        .fetch();
    },

    async queryAfterTag(tag) {
      this.$store.commit("tagSearches/add", tag);
      await this.fetchBlogs();

      if (this.$store.state.tagSearches.tags.length > 0) {
        this.articles = this.articles.filter((a) => {
          for (tag of this.$store.state.tagSearches.tags) {
            if (a.tags.includes(tag)) {
              return true;
            }
          }

          return false;
        });
      }
    },
  },

  async beforeMount() {
    await this.fetchBlogs();
  },
};
</script>