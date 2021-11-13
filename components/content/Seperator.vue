<template>
  <div :style="`margin-top:${pixels}px; margin-bottom:${pixels}px;`">
      <center>
          <slot></slot>
      </center>
  </div>
</template>

<script>
export default {
    props: ["space"],

    data() {
        return {
            pixels: 0
        }
    },

    beforeMount() {
        if (this.space == "xl") {
            this.pixels = 200
        }
    }
}
</script>

<style>

</style>