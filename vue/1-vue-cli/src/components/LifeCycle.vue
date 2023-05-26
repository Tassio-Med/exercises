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

    this.lifeCycle()
  },
  mounted(){
    setTimeout(() => {
      this.nome = 'Tássio'
    }, 2000);
  },
  methods: {
    lifeCycle(){
      console.log('Executou');
    }
  }
}
</script>