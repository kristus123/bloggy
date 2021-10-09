<template>
  <div>
    <TextTitle
      class="white--text mt-8"
      title="My certificates"
    />

    <center class="mb-4">
      <h2 class="white--text font-weight-thin">
        <span style="color: red">*</span> Will translate to English. The text
        also need some cleanup
      </h2>
    </center>

    <MyCols :md="12"
        :xs="12"
        :sm="12"
        :xl="6"
        :lg="6"
        :cols="12" :pages="pagesToShow" v-slot="{page}">
      <v-card class="pa-4">
          <TextTitle :title="page.title" />
          <center>
            <v-img class="mb-10" width="400" :src="page.imageUrl" />
          </center>
          <article class="pa-6">
            <nuxt-content :document="page" />
          </article>
        </v-card>

    </MyCols>
  </div>
</template>

<script>
export default {
  layout: "cv",

  computed: {
    pagesToShow: function () {
      if (this.selectedTag == "all") {
        return this.pages;
      } else {
        return this.pages.filter((p) => p.workPlace == this.selectedTag);
      }
    },
  },

  async asyncData({ $content }) {
    const projects = await $content("_certificates").fetch();

    return {
      pages: projects,
    };
  },
};
</script>

<style>
</style>