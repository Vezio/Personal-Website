<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">TR</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarText" aria-controls="navbarText"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" style="padding-left:4em;" href="#">RESUME</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.bg-dark {
  background-color:#212121 !important;
}
</style>

<script>
export default {
  name: 'Navigation'
}
</script>