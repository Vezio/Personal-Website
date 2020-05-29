<template>
  <div class="Experience">
    <div class="row" id="About">
      <div class="col-sm-12 mb-4">
        <div class="card shadow" style="width: 100%"> 
          <div class="card-header" style="text-align:left;">
            <h2>About</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col mb-3">
                <h5 style="text-align: center;">Welcome to my personal website that I designed, developed, and deployed!</h5>
                <p style="padding-top:1em;">I am a full time undergraduate student working part time as a Software Developer at <span style="color:#006699; font-weight:bold;">IBM</span> while maintaining 
                  roles such as President of the <span style="color:#C8102E; font-weight:bold;">Marist College</span> Computer Society, a Board Member of the  <span style="color:#C8102E; font-weight:bold;">Marist College</span>  Multicultural 
                  Community, a Tutor for the <span style="color:#C8102E; font-weight:bold;">Marist College</span>  CS Programming Lab, and a Research Assistant for the Doctorate Program 
                  of Physical Therapy at <span style="color:#C8102E; font-weight:bold;">Marist College</span> .</p>
                <p style="padding-top:1em;">Over the past 3 years, I have gained valuable experience in agile development, full stack 
                  development, microservices, continuous integration, automation, research & patent development, conference presenting, and teaching. Currently, I am learning more about Machine Learning 
                  and Neural Network technologies through my work at <span style="color:#006699; font-weight:bold;">IBM</span>. </p>
                <p style="padding-top:1em;">Besides academics and work, I enjoy programming on the side. Some of my recent projects include this website and teaching myself how to program in an awesome language called <span style="font-weight:bold;">C</span>. Outside of the virtual environment,
                  I started learning how to play the piano; I love hiking and running on trails; I enjoy watching live sports in person; And I find astronomy to be one of the coolest subjects besides computer science.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <hr />
                <p style="padding-top:1em; font-weight:bold; text-align:center;">Other places to find me:</p>
                <ul class="list-group list-group-flush" >
                  <li class="list-group-item"> 
                    <a href="https://www.linkedin.com/in/tylerrimaldi/">
                    LinkedIn</a></li>
                  <li class="list-group-item">
                    <a href="https://github.com/vezio">
                    GitHub</a></li>
                  <li class="list-group-item">
                    <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=tyler%20rimaldi">
                    IEEE Xplore Query</a></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <hr />
                <p style="padding-top:1em; font-weight:bold; text-align:center;">Articles I am featured in:</p>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"> 
                    <a href="https://www.ibm.com/blogs/jobs/2019/08/04/my-ibm-hackathon-experience/">
                    IBM North American Internship Hackathon</a></li>
                  <li class="list-group-item">
                    <a href="https://www.marist.edu/-/marist-news-interns-in-action-a-look-into-three-marist-student-internship-experiences">
                    Marist College Internship Highlight Article</a></li>
                  <li class="list-group-item">
                    <a href="https://www.marist.edu/-/marist-news-computer-science-students-present-their-research-at-mit-columbia-and-other-prestigious-venues">
                    Recognition for Research Presentations at MIT and Columbia University</a></li>
                </ul>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.splash{
  margin-top:6em;
}

.card {
  background-color: #e0e0e0;
}

.card-body {
  background-color: #f5f5f5;
  text-align: left;
}

h2 {
  font-size: 1.2em;
  margin: 0;
  padding: 0;
}

a {
  color:#5993E5;
}

p {
  margin:0 auto;
}

li {
  background-color: #f5f5f5;
  text-align: left;
}
</style>

<script>
export default {
  name: 'Experience'
}
</script>