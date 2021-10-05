<template>
  <div>
    <TextTitle
      class="white--text mt-8"
      title="Some projects i have worked on"
    />

    <center class="mb-4">
      <h2 class="white--text font-weight-thin">
        <span style="color: red">*</span> Will translate to English. The text
        also need some cleanup
      </h2>
    </center>

    <v-radio-group v-model="selectedTag" row dark class="my-12">
      <v-radio v-for="k in tags" :key="k" :label="`${k}`" :value="k"></v-radio>
    </v-radio-group>

    <MyCols :md="12"
        :xs="12"
        :sm="12"
        :xl="6"
        :lg="6"
        :cols="12" :pages="pagesToShow" v-slot="{page}">
      <v-card class="pa-4">
          <TextTitle :title="page.title" />
          <center>
            <v-img class="mb-10" width="400" :src="page.image" />
          </center>
          <article class="pa-6">
            <nuxt-content :document="page" />
          </article>

          <v-row align="center" justify="center">
            <v-col
              v-for="skill in page.technologies"
              v-bind:key="skill"
              class="my-2"
            >
              <v-chip color="orange" class="ma-2">
                {{ skill }}
              </v-chip>
            </v-col>
          </v-row>
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
    const projects = await $content("_projects").fetch();

    const tags = new Set();
    tags.add("all");
    projects.map((p) => tags.add(p.workPlace));

    return {
      selectedTag: "all",
      tags: tags,
      pages: projects,
    };
  },
};
</script>

<style>
</style>