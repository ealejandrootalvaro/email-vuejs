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
        {asunto: "Soy un email de archive", contenido: "Soy el contenido", from: "Edwin", to: "Victor"},
        {asunto: "Hola mundo 2", contenido: "Soy el contenido 2", from: "Edwin", to: "Victor"}
      ]
    }
  }

}
</script>

<style lang="css">
</style>
