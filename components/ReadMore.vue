<template>
  <div >
    <center v-if="!open" >
      <MyHr />
      <v-btn class="mb-6 mt-12" @click="toggleText" color="blue" dark outlined>
        <v-icon color="blue" class="mr-2">mdi-book</v-icon>
        {{ buttonText }}
      </v-btn>
    </center>
    <slot v-if="open" />
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggleText() {
      this.open = !this.open;
    }
  },
  computed: {
    buttonText() {
      return this.open ? "Click to hide Text" : this.text;
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>

