<template>
  <div>
   <PrimeiroComponente />
    <h2>Agora eu estou testando os {{ dados }} em componentes.</h2>
  </div>
</template>

<script>
   import PrimeiroComponente from './components/PrimeiroComponente.vue'
  
  export default {
    name:'App',
    components: {
      PrimeiroComponente
    }, 
    data(){
      return {
        dados: 'dados'
      }
    }
  }
</script>