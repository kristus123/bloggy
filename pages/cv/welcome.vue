<template>
  <v-overlay :value="true" opacity="100" color="blue darken-2">
    <center>
        <div class="mb-8">
      <v-icon>mdi-code-tags</v-icon>
    </div>

    <h1>
      Welcome <span class="orange--text">{{ $route.query.name || '{insert name here with ?name=bob}' }}</span>
    </h1>

    <p class="mt-8" style="max-width: 20rem">
      I am always looking for improvements for my site so please don't be shy if
      you have any suggestions
    </p>

    <nuxt-link to="/cv">
      <v-btn class="mt-4 black--text" color="white">Alrighty!</v-btn>
    </nuxt-link>

    <div class="mt-8">
      <v-icon>mdi-code-tags</v-icon>
    </div>
    </center>
  </v-overlay>
</template>

<script>
export default {};
</script>

<style>
</style>