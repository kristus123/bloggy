<template>
  <v-card class="motion" max-width="400">
            <v-img
              height="10"
              :src="`${article.coverImage}`"
              class="pa-9 align-end"
              min-height="300"
            />

            <div class="pa-4">
              <h2>{{ article.title }}</h2>
              <p class="mt-4">{{ article.description }}</p>
              <div class="mt-5 mb-4">
              </div>
            </div>
            <center class="pa-4">
              <nuxtLink :to="`/content/${article.pathPrefix}/${article.slug}`">
                <v-btn
                block
                dark
                color="blue darken-1"
                >{{ article.readButton }}</v-btn
              >
              </nuxtLink>
              
            </center>
          </v-card>
</template>

<script>
export default {
    props: ['article']

}
</script>

<style>

</style>