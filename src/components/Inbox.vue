<template lang="html">
  <div class="">
    <emails :lista="emails"></emails>
  </div>


</template>

<script>

import Emails from './Emails'

export default {

  components: {
    Emails
  },

  data(){
    return {
      emails: [
        {asunto: "Hola mundo", contenido: "Soy el contenido", from: "Edwin", to: "Victor"},
        {asunto: "Hola mundo 2", contenido: "Soy el contenido 2", from: "Edwin", to: "Victor"},
        {asunto: "Hola soy el email de victor", contenido: "Soy el contenido", from: "Victor", to: "Edwin"}
      ]
    }
  }
}

</script>

<style lang="css">
</style>
