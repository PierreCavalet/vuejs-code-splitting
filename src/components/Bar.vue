<template>
  <div class="bar">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'hello'}">hello</router-link>
    <router-link :to="{name: 'goodbye'}">goodbye</router-link>
    <router-link :to="{name: 'foo'}">foo</router-link>
  </div>
</template>

<script>
export default {
  name: 'bar',
  data () {
    return {
      msg: 'Bar route'
    }
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
