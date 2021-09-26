<template>
  <article>
    
    <center>
      <div class="container">
        <TextTitle :title="page.title" />
        <h2 class="grey--text mt-2 font-weight-thin">
          {{ page.description }}
        </h2>
      </div>
    </center>
    <div class="rounded pb-6">
      <nuxt-content class="px-5" :document="page" />
    </div>
    <center>
      <v-row justify="center" class="mt-16">
        <v-col cols="12" sm="12" md="12 " lg="6" xl="6">
          <p class="mb-2 grey--text font-weight-thin">
            Article written -
            <strong
              >{{
                new Date(page.createdAt).toLocaleString("default", {
                  month: "long",
                })
              }}
              {{ new Date(page.createdAt).getFullYear() }}</strong
            >
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="12 " lg="6" xl="6">
          <p  class="mb-10 grey--text font-weight-thin">
            Last updated -
            <strong
              >{{
                new Date(page.updatedAt).toLocaleString("default", {
                  month: "long",
                })
              }}
              {{ new Date(page.updatedAt).getFullYear() }}</strong
            >
          </p>
        </v-col>
      </v-row>
      <v-img
        max-width="50rem"
        max-height="50rem"
        :src="page.coverImage"
      ></v-img>
    </center>
  </article>
</template>

<script>
export default {
  layout: "blogs",

  async asyncData({ $content, params }) {
    return {
      page: await $content(params.folder, params.name).fetch(),
    };
  },
};
</script>

<style scoped>
.container {
  margin-bottom: 40px;
  border-radius: 10px;
}
</style>


<style scoped>
div.rounded {
  border-top: 2px solid #dddddd77;
  border-bottom: 2px solid #dddddd77;
}
</style>