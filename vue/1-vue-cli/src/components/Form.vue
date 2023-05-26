<template>
  <form action="" @submit="enviarFormulario($event)">
    <div>
      <input type="text" v-model="name">
    </div>
    <div>
      <input type="text" v-model="email">
    </div>
    <div>
      <InputSubmit />
    </div>
  </form>
  
</template>
<script>

import InputSubmit from './form/InputSubmit.vue'
import InputText from './form/InputText.vue'

export default {
  name: 'Form',
  components: {
    InputSubmit,
    InputText,
  },
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    enviarFormulario(e){
      e.preventDefault();

      const name = this.name;
      const email = this.email;

      console.log('Formulário enviado');
      console.log('O nome é: ' + name);
      console.log('O email é: ' + email);
    }
  }
}
</script>