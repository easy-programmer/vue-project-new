<template>
  <b-table striped hover :items="items"></b-table>
</template>
<!-- npm i bootstrap-vue --save -->
<!-- npm install jquery@3.3.1 --save -->
<!-- npm install --dev url-loader@1.1.1 --save -->
<script>
  const items = [  ]
  
  export default {
    data () {
      return {
        items: []
      }
    }, mounted() {
          this.axios.get('http://localhost:3000/data').then(res => {
            this.items = res.data
          })
      }
  }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
