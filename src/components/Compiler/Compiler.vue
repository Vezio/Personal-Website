<template>
    <div class="splash" data-aos="fade-down" data-aos-duration="500">
        <h1>Hi, I'm the Compiler. I am still in development!</h1>
        <p>Here is the lanugage <a href="https://www.labouseur.com/courses/compilers/grammar.pdf" style="font-weight:bold;">grammar</a> I can compile.<p>
        <div class="container">
            <div class="jumbotron">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Source Code
                            </div>
                            <div class="card-body">
                                <textarea class="form-control" rows="15" wrap="off"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Compilation Logs
                            </div>
                            <div class="card-body">
                                <textarea class="form-control" rows="15" wrap="off"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" style="padding-top:1em; padding-bottom:1em;">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Trees
                            </div>
                            <div class="card-body">
                                <textarea class="form-control" rows="15" wrap="off"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Machine Code
                            </div>
                            <div class="card-body">
                                <textarea class="form-control" rows="15" wrap="off"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                Symbol Table
                            </div>
                            <div class="card-body">
                                <textarea class="form-control" rows="15" wrap="off"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Splash',
  components: {

  }
}
</script>

<style scoped>
.splash{
  margin-top:6em;
}

body {
  margin: 0;
}
</style>
