<template>
  <div>
   <PrimeiroComponente />
    <h2>Agora eu estou testando os {{ dados }} em componentes.</h2>
    <LifeCycle />
    <Pessoa />

  </div>
</template>

<script>
   import PrimeiroComponente from './components/PrimeiroComponente.vue'
   import LifeCycle from './components/LifeCycle.vue'
   import Pessoa from './components/Pessoa.vue'
  
  export default {
    name:'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa
    }, 
    data(){
      return {
        dados: 'dados'
      }
    }
  }
</script>