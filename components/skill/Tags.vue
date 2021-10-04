<template>
  <fragment>
    <v-row align="center" justify="center">
      <v-col v-for="skill in skills" v-bind:key="skill.value" class="my-2">
        <v-chip :color="skill.color" dark class="ma-2" outlined>
          <v-icon left> mdi-server-plus </v-icon>
          {{ skill.value }}
        </v-chip>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
export default {
  data() {
    return {
      skills: [],
    };
  },

  beforeMount() {
    const skills = [
      "Programming",
      "Python",
      "Shell scripting",
      "AWS",
      "Powershell",
      "Javascript",
      "Vue.js",
      "GTD (getting things done)",
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
      "BDD",
      "TDD",
      "CLEAN code",
      "(functional) Domain modelling",
      "CLEAN architecture",
      "risk-driven architecture",
      "agile methology",
      "Django",
      "Lean methology",
    ];

    const colors = ["red", "green", "blue", "purple", "yellow darken-4"];

    for (const skill of skills) {
      this.skills.push({
        value: skill,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  },
};
</script>

<style>
</style>