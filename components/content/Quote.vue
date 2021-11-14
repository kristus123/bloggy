<template>
  <div class="mx-0 mt-8">
    <v-icon class="pb-0 ma-0 mt-2" x-large>mdi-format-quote-open</v-icon>
    <center>
      <p style="font-size: 20px" class="font-weight-thin ma-0 pa-0">
        {{ quote }}
      </p>
      <p
        v-if="person != null"
        style="font-size: 25px"
        class="font-weight-thin ma-0 pa-0 text-right mt-4"
      >
        - {{ person }}
      </p>
      <p
        v-if="source != null && url != null"
        style="font-size: 15px"
        class="font-weight-light ma-0 pa-0 text-right mt-4"
      >
        <v-icon large color="orange darken-2">{{ icon }}</v-icon>
       <a :href="url">- {{source}}</a>
      </p>
      <p
        v-else-if="source != null"
        style="font-size: 15px"
        class="font-weight-thin ma-0 pa-0 text-right mt-4"
      >
        <v-icon large color="orange darken-2">{{ icon }}</v-icon>
        - {{ source }}
      </p>
    </center>
    <p class="text-right">
      <v-icon class="pa-0 ma-0" x-large>mdi-format-quote-close</v-icon>
    </p>
  </div>
</template>
<script>
export default {
  props: ["quote", "person", "source", "icon", "url"],
};
</script>

<style>
</style>