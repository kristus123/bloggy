<template>
  <div :style="`margin-top:${pixels}px; margin-bottom:${pixels}px;`">
      <center>
          <slot />
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
        if (this.space == "sm") {
            this.pixels = 100
        }
    }
}
</script>

<style>

</style>