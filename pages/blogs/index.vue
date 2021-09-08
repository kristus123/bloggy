<template>
    <div>
      <center class="my-5">
        <p class="grey--text ma-0 mb-2 pa-0">sort by tags</p>
        <v-chip small class="mx-4" dark v-for="tag in tags" v-bind:key="tag" :color="$store.state.tagSearches.tags.includes(tag) ? 'green darken-1' : 'grey'" @click="() => queryAfterTag(tag)">{{tag}}</v-chip>
      </center>

          <center>
            <v-row align="center" justify="center" class="ma-0 pa-0">
            
        <v-col xs="12" sm="12" md="6 " lg="4" xl="4" v-for="article in articles" v-bind:key='article.slug'>
          
          <v-card class="motion" max-width="400">
            
            <v-img
            height="10"
              :src="`/${article.coverImage}`"
              class="pa-9 align-end"
              min-height="300"
            />

            <div class="pa-4">
              <h2>{{article.title}}</h2>
            <p class="mt-4">{{article.description}}</p>
            <div class="mt-5 mb-4">
              <v-chip small dark :color="$store.state.tagSearches.tags.includes(tag) ? 'green darken-1' : 'grey lighten-1'" class="mr-4" v-for="tag in article.tags" v-bind:key="tag">{{tag}}</v-chip>
            </div> 
            </div>
            <center class="pa-4">
              <v-btn block dark :to="`blogs/${article.slug}`"  color="blue darken-1">{{article.readButton}}</v-btn>
            </center>
          </v-card>
        </v-col>
      </v-row>
          </center>
      


      <center class="mt-16">
        <p>showing blog post {{skip}}-{{skip + 50}}</p>
        <v-btn :disabled="skip == 0" @click="() => {skip -= 50; fetchBlogs()}">previous page</v-btn>
        <v-btn :disabled="articles.length <= 50" @click="() => {skip += 50; fetchBlogs()}">next page</v-btn>
      </center>
        
    </div>
</template>

<script>
export default {
  data () {
    return {
      tags: ['microservices', 'clean code'],
      query: null,
      skip: 0,
      articles: []
    }
  },

  methods: {

    async fetchBlogs() {
    this.articles = await this.$content('blogs')
        .only(['title', 'description', 'slug', 'tags', 'coverImage', 'readButton',])
        .sortBy('createdAt', 'asc')
        .limit(50)
        .skip(this.skip)
        .fetch()
  },

    async queryAfterTag(tag) {

      this.$store.commit('tagSearches/add', tag)
      await this.fetchBlogs()

      if (this.$store.state.tagSearches.tags.length > 0) {
        this.articles = this.articles.filter(a => {
          for (tag of this.$store.state.tagSearches.tags) { 
            if (a.tags.includes(tag)) {
              return true
            }
          }

          return false;
       })
      }
    }
  },

  async beforeMount() {
    await this.fetchBlogs()
  },
}
</script>

<style scoped>
.motion {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
    -webkit-transition: all .1s ease-in;
}
.motion:hover {
  top: -10px;
  background-color: rgba(255,202,26,0.2);
}
</style>