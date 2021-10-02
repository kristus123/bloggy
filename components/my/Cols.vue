<template>
  <fragment>
    <v-row align="center" justify="center">
      <v-col
        :xs="all || xs || 12"
        :md="all || md || 6"
        :lg="all || lg || 6"
        :xl="all || xl || 6"
        :cols="all || cols || 12"
        v-for="page in pages"
        v-bind:key="page.title"
        class="mb-12 mt-12"
      >
        <slot :page="page" />
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
export default {
  props: ["pages", "xs", "md", "lg", "xl", "cols", "all"],
};
</script>

<style>
</style>