<template>
  <div class="Experience">
    <div class="row" id="About">
      <div class="col">
        <div class="card shadow-sm" style="width: 100%">
          <div class="card-header" style="text-align:left">
            <h2>About</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <p>I am a full time undergraduate student working part time as a Software Developer at IBM while maintaining 
                  roles such as President of the Marist College Computer Society, a Board Member of the Marist College Multicultural 
                  Community, a Tutor for the Marist College CS Programming Lab, and a Research Assistant for the Doctorate Program 
                  of Physical Therapy at Marist College.</p>
                <p style="padding-top:1em;">Experienced in agile development, continuous integration, automation, full stack 
                  development, microservices, research & patent development, conference presenting, and teaching.</p>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <p style="padding-top:1em;">Articles I am featured in:</p>
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
  text-align: justify;
}
</style>

<script>
export default {
  name: 'Experience'
}
</script>