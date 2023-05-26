<template>
  <div>
    <Header />
   <PrimeiroComponente />
    <h2 class="paragrafo-pai">Agora eu estou testando os {{ dados }} em componentes.</h2>
    <LifeCycle />
    <Pessoa />

  </div>
</template>

<script>
   import Header from './components/Header.vue'
   import PrimeiroComponente from './components/PrimeiroComponente.vue'
   import LifeCycle from './components/LifeCycle.vue'
   import Pessoa from './components/Pessoa.vue'
  
  export default {
    name:'App',
    components: {
      Header,
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

<style>
  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: pink;
  }

  .teste {
    background-color: #404040;
    border-radius: 4px;
  }
</style>