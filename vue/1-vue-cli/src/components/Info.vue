<template>
  <div>
    <p>{{compEmail}} - {{email}}</p>
    <h3 v-if="esta_trabalhando">Estou trabalhando momento</h3>
    <h3 v-else>Estou em busca de novas oportunidades!</h3>
    <p>Utilizo as seguintes tecnologias para back-end:</p>
    <ul>
      <li v-for="(technology, index) in backend_tecnologies" v-bind:key="index">{{technology}}</li>
    </ul>
    <p>Utilizo as seguintes tecnologias para o front-end:</p>
    <ul>
      <li v-for="technology in front" :key="technology.id">
        {{technology.language}}
      </li>
    </ul>
    <div>
      <button @click='showEmail'>{{textoBotao}}</button>
    </div>
    <p v-show='mostrar_email'>Mande uma mensagem para: {{ email }}</p>
    <p class="teste">para acessar meu portfólio <a v-bind:href="meu_link" target="_blank">basta clicar aqui</a></p>
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
  props: {
    email: String,
    esta_trabalhando: Boolean,
  },
  data() {
    return {
      mostrar_email: false,
      meu_link: 'https://google.com',
      textoBotao: 'Mostrar e-mail',
      backend_tecnologies: ['Javascript', 'Typescript', 'Python', 'Java'],
      frontend_technologies: [
        {id: 1, language: 'HTML'},
        {id: 2, language: 'CSS'},
        {id: 3, language: 'Vue'}
      ]
    }
  },
  methods: {
    showEmail(){
      console.log('Testando meu método')
      this.mostrar_email = !this.mostrar_email
      if(!this.mostrar_email) {
        this.textoBotao = 'Mostrar e-mail'
      } else {
        this.textoBotao = 'Esconder e-mail'
      }
    }
  }
}
</script>

<style>
 .paragrafo-pai {
  color: red;
 }
</style>