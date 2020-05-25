<template>
  <div id="app">
    <Navigation />
    <Splash msg="Hi, I am Tyler!"/>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Splash from './components/Splash.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Splash,
    Footer,
    Navigation
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@font-face {
  font-family: Roboto-Black;
  src: url(./assets/fonts/Roboto/Roboto-Medium.ttf);
}

@font-face {
  font-family: Roboto-Light;
  src: url(./assets/fonts/Roboto/Roboto-Light.ttf);
}

p,td,li {
  font-family: Roboto-Light;
}

h1, h2, h3, a {
  font-family: Roboto-Black;
}
</style>