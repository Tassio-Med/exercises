<template>
  <div>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    <MultiplosEventos />
  </div>
</template>

<script>
 
  import MultiplosEventos from './MultiplosEventos.vue'
  import Reutilizacao from './Reutilizacao.vue'

  export default {
    name:'PrimeiroComponente',
    components: {
      MultiplosEventos,
      Reutilizacao,
    },
    data() {
      return {
        nome: 'Tássio',
        profissao: 'Desenvolvedor Mobile',
      }
    }
  }
</script>