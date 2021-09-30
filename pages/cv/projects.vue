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

    <center>
      <v-card width="150" class="ma-8 pa-2 pl-4">
        <v-radio-group v-model="selectedTag">
          <v-radio
            v-for="k in tags"
            :key="k"
            :label="`${k}`"
            :value="k"
          ></v-radio>
        </v-radio-group>
      </v-card>
    </center>

    <v-row>
      <v-col
        v-for="page in pagesToShow"
        v-bind:key="page.slug"
        :md="12"
        :xs="12"
        :sm="12"
        :xl="6"
        :lg="6"
        :cols="12"
      >
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
        <center></center>
      </v-col>
    </v-row>
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
    return {
      selectedTag: "all",
      tags: [ "all", "dnb", "experis", "freelance",],
      pages: await $content("_projects").fetch(),
    };
  },
};
</script>

<style>
</style>