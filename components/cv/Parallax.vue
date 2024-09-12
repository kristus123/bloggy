<template>
  <div class="video-container">
    <video class="video" src="/public/video.mp4" autoplay muted loop></video>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('scroll', this.handleScroll);

    const video = this.$el.querySelector('.video');
	video.playbackRate = 0.5; // Set playback rate to 50% of normal speed
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY * 0.2 + 600
      const video = this.$el.querySelector('.video');
      video.style.transform = `translateY(-${scrollPosition}px)`;
    }
  }
}
</script>

<style scoped>
.video-container {
  overflow: hidden;
  position: relative;
  width: 100%; 
  height: 400px; 
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
</style>
