<template>
  <form action="submit">
    <div>
      <InputSubmit />
    </div>
    <div>
      <InputText />
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
  }
}
</script>