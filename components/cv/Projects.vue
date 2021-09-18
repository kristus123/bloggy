<template>
  <div>
    <v-card class="pa-16">
      <TextTitle :title="title" />
      <center>
        <p class="grey--text">{{description}}</p>
        <v-img class="mb-10" width="400" :src="imageUrl" />
      </center>
      <slot />
    </v-card>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "description",
    "imageUrl",
    "technologyUsed",
    "amountOfMonths",
    "yearFromTo",
  ],
};
</script>

<style>
</style>