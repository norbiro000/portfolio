<template>
  <table border="1">
    <tr>
      <td><router-link to="/AboutMe">About Me</router-link></td>
      <td><router-link to="/MySkill">My Skills</router-link></td>
      <td><router-link to="/MyWorks">My Works</router-link></td>
      <td><router-link to="/MyRepositories">My Repositories</router-link></td>
    </tr>
  </table>
</template>
<script>
  export default {
    name: 'menu',
    mounted () {
    }
  }
</script>
