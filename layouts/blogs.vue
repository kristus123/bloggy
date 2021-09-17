<template>
  <v-app>
    <v-main class="bg-image">
      <v-container style="max-width: 70rem">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import image from "assets/wallpaper.jpg";

export default {
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style scoped>
.bg-image {
  
}
</style>