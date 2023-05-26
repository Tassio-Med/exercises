<template>
  <ul>
    <li>Home</li>
    <li>Projetos</li>
    <li>Contato</li>
  </ul>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    display: flex;
  }

  li{
    margin-right: 10px;
  }

  a{
    color: #ddd;
    text-decoration: none;
    transition: .5s;
  }

  a:hover {
    color: turquoise;
  }
</style>