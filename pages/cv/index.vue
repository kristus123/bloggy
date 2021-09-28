<template>
  <center>
    <h1 class="mt-8">
      My name is <span class="orange--text">Kristian Lavik Solbakken</span>
    </h1>
    <p>And this is my <strong class="orange--text">CV</strong></p>

    <v-row align="center" justify="center">
      <v-col
        xs="12"
        md="12"
        lg="12"
        xl="12"
        cols="12"
        v-for="page in pages"
        v-bind:key="page.title"
        class="my-2"
      >
        <center>
          <nuxt-link :to="page.to">
            <v-btn text x-large color="blue darken-2" dark>{{
              page.title
            }}</v-btn>
          </nuxt-link>

          <p class="grey--text">{{ page.description }}</p>
        </center>
      </v-col>
    </v-row>

    <hr class="my-12" style="max-width: 70%" />
    <v-row align="center" justify="center">
      <v-col v-for="skill in skills" v-bind:key="skill.value" class="my-2">
        <v-chip :color="skill.color" dark class="ma-2" outlined>
          <v-icon left> mdi-server-plus </v-icon>
          {{ skill.value }}
        </v-chip>
      </v-col>
    </v-row>
  </center>
</template>

<script>
export default {
  layout: "cv",

  beforeMount() {
    const skills = [
      "Programming",
      "Python",
      "Shell scripting",
      "AWS",
      "Powershell",
      "Javascript",
      "Vue.js",
      "HTML",
      "Git",
      "Java",
      "Spring",
      "Micronaut",
      "React.js",
      "Angular.js",
      "Kotlin",
      "Native Android development",
      "Making music",
      "Basketball",
    ];

    const colors = ["red", "green", "blue", "purple", "yellow darken-4"];

    skills.map((s) =>
      this.skills.push({
        value: s,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    );
  },

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

      skills: [],
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