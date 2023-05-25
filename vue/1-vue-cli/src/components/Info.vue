<template>
  <div>
    <h3 v-if="esta_trabalhando">Estou trabalhando momento</h3>
    <h3 v-else>Estou em busca de novas oportunidades!</h3>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Javascript</li>
      <li>PHP</li>
      <li>Python</li>
      <li>Typescript</li>
    </ul>
    <p v-show='mostrar_email'>Mande uma mensagem para: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data() {
    return {
      esta_trabalhando: true,
      email: 'tassiohm@gmail.com',
      mostrar_email: true
    }
  }
}
</script>