<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="/">TR</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" 
              data-target="#navbarText" aria-controls="navbarText"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" 
            href="https://raw.githubusercontent.com/Vezio/Personal-Website/master/src/assets/resume/Tyler_Rimaldi_Resume_2020.pdf">
            RESUME</a>
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

@media (min-width: 992px){
    .navbar li {
        margin-left : 4em;
        margin-right : 1em;
    }
}
</style>

<script>
export default {
  name: 'Navigation'
}
</script>