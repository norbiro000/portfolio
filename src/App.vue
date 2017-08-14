<template>
  <div id="app">
    <center>
      <navigator></navigator>
    </center>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    'navigator': require('./components/Navigator')
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
