<template>
  <div class="splash" data-aos="fade-down" data-aos-duration="500">
      <h1>Hi, I am Tyler!</h1>
    <div class="container">
      <About />
      <Experience />
      <Timeline />
    </div>
  </div>

</template>

<script>
import About from './About.vue'
import Experience from './Experience.vue'
import Timeline from './Timeline.vue'

export default {
  name: 'Splash',
  components: {
    About,
    Experience,
    Timeline
  }
}
</script>

<style scoped>
.splash{
  margin-top:6em;
}

h1 {
  margin-bottom:1em;
}

</style>
