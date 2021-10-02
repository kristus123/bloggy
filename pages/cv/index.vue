<template>
  <center>
    <h1 class="mt-8">
      My name is <span class="orange--text">Kristian Lavik Solbakken</span>
    </h1>
    <p>And this is my <strong class="orange--text">CV</strong></p>

    <MyCols :all="12" :pages="pages" v-slot="{ page }">
      <center>
        <nuxt-link :to="page.to">
          <v-btn text x-large color="blue darken-2" dark>{{
            page.title
          }}</v-btn>
        </nuxt-link>

        <p class="grey--text">{{ page.description }}</p>
      </center>
    </MyCols>

    <hr class="my-12" style="max-width: 70%" />
    <SkillTags />
  </center>
</template>

<script>
export default {
  layout: "cv",

  data() {
    return {
      pages: [
        {
          title: "my projects",
          description: "Fancy things",
          to: "/cv/projects",
        },
        {
          title: "My work experience",
          description: "and responsibilities",
          to: "/cv/jobs",
        },
        {
          title: "Certificates",
          description: "Indeed I have nerded hard",
          to: "/cv/certificates",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

h2 {
  font-weight: lighter;
  color: white;
}

p {
  color: white;
}
</style>