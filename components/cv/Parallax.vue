<template>
  <center>
    <div>
      <video preload="auto" class="video" :src="src" :style="{ maxWidth: width, height: height }"autoplay muted loop></video>
    </div>
  </center>
</template>

<script>
export default {
  props: {
  	src: {
      type: String,
      default: "/public/hopp_i_vannet.mp4"  
	},
    width: {
      type: String,
      default: '100%' 
    },
    height: {
      type: String,
      default: '40vh' 
    },
    speed: {
      type: Number,
      default: 1 
    },
    start: {
      type: Number,
      default: 0 
    },
  },
  mounted() {
	const video = this.$el.querySelector('.video');
	video.playbackRate = this.speed; // Set playback rate to 50% of normal speed

	video.addEventListener('loadedmetadata', () => {
		video.currentTime = this.start;
	});

	video.addEventListener('ended', () => {
		video.currentTime = this.start;
	});
	  },
	}
	</script>

<style scoped>
	.video {
	  width: 100%;
	  height: 100%; /* Ensure the video covers the container */
	  object-fit: cover; /* Crop video to fill container */
	  display: block; /* Prevent inline elements from causing extra spacing */
	}
</style>
