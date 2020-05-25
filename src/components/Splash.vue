<template>
  <div class="splash">
      <h1>{{ msg }}</h1>
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
  props: {
    msg: String
  },
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
</style>
