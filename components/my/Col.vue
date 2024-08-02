<template>
  <v-col
        :xs="12"
        :md="4"
        :lg="4"
        :xl="4"
        :cols="12"
        v-bind:key="Math.random()"
      >
        <slot />
      </v-col>
</template>

<script>
export default {
  props: ["xs", "md", "lg", "xl", "cols", "all"],
};
</script>

<style>

</style>