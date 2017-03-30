<template lang="html">
  <div class="row" style="text-align: left">
    <div class="col-md-4">
      <label for="">Search</label>
      <input type="text" name="" value=""  class="form-control" v-model="buscador" v-on:keydown="clearEmail">
    </div>
    <div class="col-md-12">
      <div class="">
        <table class="table table-striped table-bordered ">
          <thead>
            <tr>
              <th>FROM</th>
              <th>TO</th>
              <th>SUBJECT</th>
            </tr>
          </thead>

          <tbody>
            <tr class="filaEmail" v-for="email in emailsFiltrados" v-on:click="seleccionarEmail(email)" v-bind:class="{seleccionado: email == emailSeleccionado}">
              <td>{{email.from}}</td>
              <td>{{email.to}}</td>
              <td>{{email.asunto}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>

  <div class="col-md-12" v-show="emailSeleccionado != '' ">
    <contenido :email="emailSeleccionado"></contenido>
  </div>



  </div>
</template>

<script>

import Contenido from './Contenido'

export default {

  components: {
    Contenido
  },

  props: {
    lista: Array
  },

  data(){
    return {
      buscador: "",
      emailSeleccionado: ""
    }
  },

  methods: {
    seleccionarEmail(email){
      this.emailSeleccionado = email;
    },
    clearEmail(){
      this.emailSeleccionado = "";
    }
  },

  computed: {
    emailsFiltrados(){
      return this.lista.filter(email => email.from.includes(this.buscador));
    }
  }



}
</script>

<style lang="css">

    .seleccionado{
      background-color: #BDBDBD !important;
    }

  .filaEmail:hover{
    background-color: #BDBDBD !important;
  }



  table{
    margin-top: 30px;
  }

</style>
