<template>
  <div>
   <PrimeiroComponente />
    <h2>Agora eu estou testando os {{ dados }} em componentes.</h2>
    <LifeCycle />

  </div>
</template>

<script>
   import PrimeiroComponente from './components/PrimeiroComponente.vue'
   import LifeCycle from './components/LifeCycle.vue'
  
  export default {
    name:'App',
    components: {
      PrimeiroComponente,
      LifeCycle
    }, 
    data(){
      return {
        dados: 'dados'
      }
    }
  }
</script>