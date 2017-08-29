<template>
  <div class="goodbye">
    <h1>{{ msg }}</h1>
    <router-link :to="{name: 'hello'}">hello</router-link>
    <router-link :to="{name: 'foo'}">foo</router-link>
    <router-link :to="{name: 'bar'}">bar</router-link>
  </div>
</template>

<script>
export default {
  name: 'goodbye',
  data () {
    return {
      msg: 'Goodbye route'
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
