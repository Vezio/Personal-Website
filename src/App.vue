<template>
  <div id="app" >
    <Navigation />
    <Splash />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Splash from './components/Splash/Splash.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Splash,
    Footer
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

h1, h2, h3, h4, h5, a {
  font-family: Roboto-Black;
}

.card-header {
  background-color:#B7C3D0 !important;
}
</style>