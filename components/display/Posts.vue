<template>
  <center>
    <v-row align="center" justify="center" class="ma-0 pa-0">
      <v-col
        xs="12"
        sm="12"
        md="6 "
        lg="4"
        xl="4"
        v-for="article in articles"
        v-bind:key="article.slug"
      >
      {{article}}
        <CardPost :article="article" />
      </v-col>
    </v-row>
    <div v-if="articles != 0">
      <center class="mt-16">
        <p>showing blog post {{ skip }}-{{ skip + 50 }}</p>
        <v-btn
          :disabled="skip == 0"
          @click="
            () => {
              skip -= 50;
              fetchBlogs();
            }
          "
          >previous page</v-btn
        >
        <v-btn
          :disabled="articles.length <= 50"
          @click="
            () => {
              skip += 50;
              fetchBlogs();
            }
          "
          >next page</v-btn
        >
      </center>
    </div>
  </center>
</template>

<script>
export default {
  props: ["articles"],

  data() {
    return {
      skip: 0,
    };
  },
};
</script>

<style scoped>
.motion {
  position: relative;
  top: 0;
  transition: top ease 0.2s;
  -webkit-transition: all 0.1s ease-in;
}
.motion:hover {
  top: -10px;
  background-color: rgba(255, 202, 26, 0.2);
}
</style>