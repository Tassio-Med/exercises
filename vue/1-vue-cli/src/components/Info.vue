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
    <p>para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
    <Picture />
  </div>
</template>

<script>

import Picture from './Picture.vue'

export default {
  name: 'Info',
  components: {
    Picture
  },
  data() {
    return {
      esta_trabalhando: true,
      email: 'tassiohm@gmail.com',
      mostrar_email: true,
      meu_link: 'https://google.com'
    }
  }
}
</script>