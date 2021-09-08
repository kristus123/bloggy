<template>
  <div>
      <h1>hei</h1>
      <v-text-field v-model="tag" placeholder="Search words (click enter to add)" @keydown.enter="addTag"></v-text-field>
      {{tags}}
  </div>
</template>

<script>
export default {
  methods: {
    addTag() {
      if (this.tag != null) {
        this.tags.push(this.tag);  
        this.tag = null;
      }
    }
  },
  data() {
    return {
      tag: null,
      tags: []
    }
  }
}
</script>

<style>

</style>