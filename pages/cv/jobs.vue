<template>
  <div>
    <center>
      <h1 class="animated fadeIn mb-12 white--text">Hvor har jeg jobbet?</h1>
    </center>
    <v-timeline light>
      <v-timeline-item v-for="job in jobs" v-bind:key="job.title">
        <v-card>
          {{job}}
        </v-card>
      </v-timeline-item>
      
    </v-timeline>
    <center class="pt-8">
      <div style="max-width:80%;">
        
      </div>
    </center>
  </div>
</template>

<script>
export default {
  props: ["skills"],
  data() {
    return {
      jobs : [
        {title: "DNB", position: "consulent"},
        {title: "Experis", position: "consulent"},
        {title: "Askøy Kommune", position: "IKT Lærling"},
        {title: "Bergen Katedralskole", position: "IKT Lærling"},
        {title: "Amalie Skram Videregående skole", position: "IKT Lærling"},
      ]
    }
  }
};
</script>

<style>
</style>