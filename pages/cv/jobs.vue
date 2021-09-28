<template>
  <div>
    <center>
      <h1 class="animated fadeIn mb-12 white--text">My work experience</h1>
    </center>
    <v-timeline light>
      <v-timeline-item
        :color="job.color"
        v-for="job in jobs"
        v-bind:key="job.title"
      >
        <span slot="opposite"
          ><p class="white--text">{{ job.years }}</p></span
        >
        <v-card class="pa-4">
          <h1>{{ job.title }}</h1>
          <p>{{ job.position }}</p>
          <p class="mt-8 black--text">{{ job.description }}</p>
          <v-chip
            :color="job.color"
            class="white--text mx-4 mt-6"
            v-for="tag in job.tags"
            v-bind:key="tag"
            >{{ tag }}</v-chip
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <center class="pt-8">
      <div style="max-width: 80%"></div>
    </center>
  </div>
</template>

<script>
export default {
  layout: "cv",
  props: ["skills"],

  data() {
    return {
      jobs: [
        {
          color: "green darken-2",
          title: "DNB",
          position: "Sofware engineer",
          years: "2020-",
          description:
            "Worked at an app called Puls. Mostly backend but also some frontend.",
          tags: ["Java", "Android", "AWS"],
        },
        {
          color: "yellow darken-4",
          title: "Experis",
          position: "Sofware engineer consultant",
          description:
            "Graduate program for people with a completed education. After 3 months of learning I started working in DNB",
          years: "2020-2021",
          tags: ["Java", "Javascript", "Misc."],
        },
        {
          color: "blue darken-2",
          title: "Askøy Kommune",
          position: "IT intern",
          description:
            "Customer support, server maintainance and helping people with technical problems.",
          years: "2018-2020",
          tags: ["Helpdesk", "Windows Server"],
        },
        {
          color: "red darken-2",
          title: "Bergen Katedralskole",
          position: "IT intern",
          years: "2017-2018",
          description:
            "Helping students with whatever problems they might have",
          tags: ["Helpdesk", "Python"],
        },
      ],
    };
  },
};
</script>

<style>
</style>