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
                <h5 style="text-align: center;">Welcome, here's a bit about me.</h5>
                <p style="padding-top:1em;"> 
                  I am a full-time undergraduate at <span style="color:#C8102E; font-weight:bold;">Marist College</span>. 
                  I also work part-time as a Software Developer at <span style="color:#006699; font-weight:bold;">IBM</span>. 
                  At Marist, I maintain roles such as President of the Marist College Computer Society, a Consultant within a faculty lead initiative,
                  and Tutor for the Marist College Computer Science Programming Lab. Previously I was a Board Member of the Marist College Multicultural Community 
                  and a Research Assistant in the Physical Therapy Doctoral Program.
                </p>
                <p style="padding-top:1em;">
                  Over the past three years I have gained valuable experience in agile development, full stack development, microservices, continuous integration, automation, 
                  research and patent development, conference presenting, and teaching. I am currently learning about Machine Learning and Neural Network technologies through my work at IBM.
                </p>
                <p style="padding-top:1em;">
                  Other than academics and work, I enjoy programming for fun. Some of my recent projects include this website and teaching myself an awesome language called <span style="font-weight:bold;">C</span>. 
                  Outside of the virtual environment, I am learning how to play the piano. I love hiking and running on trails and watching live sports in person. I recently got into bouldering, so that has been quite fun as well.
                </p>
                <p style="padding-top:1em;">
                  Contact me via email, <a href = "mailto: Tyler.Rimaldi1@Marist.edu">Tyler.Rimaldi1@Marist.edu</a>
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
                    LinkedIn Profile</a></li>
                  <li class="list-group-item">
                    <a href="https://github.com/vezio">
                    Personal GitHub</a></li>
                  <li class="list-group-item">
                    <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?newsearch=true&queryText=tyler%20rimaldi">
                    IEEE Xplore Query, Publications</a></li>
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