<template>
  <div>
    <img :src="avatar" :alt="descricao">
    <MudarImagem @mudar-imagem="trocarImagem" />
    <Reutilizacao />
  </div>
</template>
<script>

import Reutilizacao from './Reutilizacao.vue'
import MudarImagem from './MudarImagem.vue'

export default {
  name:'Picture',
  components: {
    Reutilizacao,
    MudarImagem,
  },
  data(){
    return {
      avatar: '/img/avatar.png',
      descricao: 'Imagem de avatar'
    }
  },
  methods: {
    trocarImagem() {
      this.avatar = '/img/avatar2.png'
    }
  }

}
</script>