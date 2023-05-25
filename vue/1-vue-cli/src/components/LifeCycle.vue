<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: 'LifeCycle',
  data(){
    return {
      nome: 'Ainda não sei meu nome'
    }
  },
  created(){
    setTimeout(() => {
      this.nome = 'Mateus'
    }, 1000);
  },
  mounted(){
    setTimeout(() => {
      this.nome = 'Tássio'
    }, 4000);
  }
}
</script>