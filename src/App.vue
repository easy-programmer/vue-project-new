<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css" media="screen" title="no title" charset="utf-8">
    <NavBar></NavBar>
    <div class="content">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js" charset="utf-8"></script>
<script>
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1 0 auto;
  padding: 20px;
}
</style>