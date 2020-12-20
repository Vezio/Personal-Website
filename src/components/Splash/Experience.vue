<template>
  <div class="About">
    <div class="row" id="Experience">
      <div class="col-sm-6 mb-4">
        <div class="card shadow" style="width: 100%">
          <div class="card-header" style="text-align:left">
            <h2>Marist College</h2>
          </div>
          <div class="card-body">
            <div class="clearfix">
              <img src="../../assets/pictures/Honors-program.png" style="width: 31%" alt="Marist College Honors Program Logo" class="float-left">
              <div class="col">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><span style="font-weight:bold;">Major</span>: Computer Science</li>
                  <li class="list-group-item"><span style="font-weight:bold;">Minors</span>: Mathematics, Philosophy, IT, IS*</li>
                  <li class="list-group-item"><span style="font-weight:bold;">Overall GPA</span>: 3.8/4.0,
                    <span style="font-weight:bold;">Major GPA</span>: 3.9/4.0</li>
                  <li class="list-group-item"><span style="font-weight:bold;">Expected</span>: Spring 2021</li>
                </ul>
              </div>
            </div>
            <hr />
            <p style="text-align:center;">* {IT=Information Technology, IS=Information Systems}</p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-4">
        <div class="card shadow" style="width: 100%">
          <div class="card-header" style="text-align:left">
            <h2>IBM</h2>
          </div>
          <div class="card-body">
            <div class="clearfix">
              <img src="../../assets/pictures/IBM-logo-black.png" style="width: 28%" alt="IBM Logo" class="float-left">
              <div class="col">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><span style="font-weight:bold;">Title</span>: Co-Op Software Developer*</li>
                  <li class="list-group-item"><span style="font-weight:bold;">Team</span>: Z Artifical Intelligence and Analytics</li>
                  <li class="list-group-item"><span style="font-weight:bold;">Main Project</span>: ML/Data Analytics Suite</li>
                  <li class="list-group-item"><span style="font-weight:bold;">Side Projects</span>: DockerPot, HealthyTraveler</li>
                </ul>
              </div>
              <hr />
              <p style="text-align:center;">* {Part-time during academic semesters and full-time during summer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.2em;
  margin: 0;
  padding: 0;
}
.splash{
  margin-top:6em;
}

p {
  margin:0 auto;
}

li {
  background-color: #f5f5f5;
  text-align: left;
}

.card {
  background-color: #e0e0e0;
}

.card-body {
  background-color: #f5f5f5;
  text-align: left;
}
</style>

<script>
export default {
  name: 'About'
}
</script>