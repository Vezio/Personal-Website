<template>
  <div class="Timeline">
    <div class="row">
      <div class="col-sm-12 mb-4" id="Timeline">
        <div class="card shadow" style="width: 100%">
          <div class="card-header" style="text-align:left">
            <h2>Career Timeline</h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col-sm-12">Year</th>
                      <th scope="col-sm-12">Where</th>
                      <th scope="col-sm-12">Title</th>
                      <th scope="col-sm-12">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Summer 2021</td>
                      <td>Hmm....</td>
                      <td>Umm....</td>
                      <td>Woah, how'd we get here so fast!</td>
                    </tr>
                    <tr>
                      <td>Summer 2020 - Current</td>
                      <td><span style="color:#006699">IBM</span></td>
                      <td>Co-Op Software Developer</td>
                      <td>Z Artifical Intelligence and Analytics</td>
                    </tr>
                    <tr>
                      <td>Spring 2020 & Fall 2020</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>President</td>
                      <td>Marist College Computer Society</td>
                    </tr>
                    <tr>
                      <td>Spring 2020</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>Computer Science Lab Tutor</td>
                      <td>A fun group of lads</td>
                    </tr>
                    <tr>
                      <td>Summer 2019 - Spring 2020</td>
                      <td><span style="color:#006699">IBM</span></td>
                      <td>Co-Op Software Developer</td>
                      <td>Z Spark Open Data Analytics</td>
                    </tr>
                    <tr>
                      <td>Spring 2019 - Spring 2020</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>Software Developer and Research Assistant</td>
                      <td>Pedagogical Tool Development for 
                        <a href="https://www.marist.edu/science/doctor-physical-therapy">
                        MCDPT</a></td>
                    </tr>
                    <tr>
                      <td>Spring 2019</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>Advisory Board Member</td>
                      <td>Marist College Multicultural Community</td>
                    </tr>
                    <tr>
                      <td>Fall 2019</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>Vice President</td>
                      <td>Marist College Computer Society</td>
                    </tr>
                    <tr>
                      <td>Summer 2018 - Spring 2019</td>
                      <td> <span style="color:#006699">IBM</span>&#8212;<span style="color:#C8102E">Marist College</span></td>
                      <td>Software Developer and Research Assistant</td>
                      <td>Joint Study: 
                        <a href="https://www.marist.edu/documents/20182/564159/HoneyNet+%281%29.pdf/c750f988-2227-49df-8c7c-204379f4f19d">
                        HoneyNet</a> and <a href="https://www.marist.edu/documents/20182/564159/Mobile_Identity_Final.pdf/c39c8762-da75-4782-9362-17ed1bb74009">
                        Trusted Identity</a></td>
                    </tr>
                    <tr>
                      <td>Fall 2017 - Spring 2018</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>Desktop Technician</td>
                      <td>Residential Networking</td>
                    </tr>
                    <tr>
                      <td>Fall 2017 - Spring 2021</td>
                      <td><span style="color:#C8102E">Marist College</span></td>
                      <td>Major/Minors</td>
                      <td>Computer Science/Math, Philosophy, IT, and IS</td>
                    </tr>
                  </tbody>
                </table>
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
  name: 'Timeline'
}
</script>