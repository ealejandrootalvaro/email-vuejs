<template>
  <div id="app">

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 col-md-offset-1">
          <ul class="nav nav-tabs" >
            <router-link to="/" active-class="active" tag="li" exact><a href="#">Inbox</a></router-link>
            <router-link to="/archive" active-class="active"  tag="li"><a href="#">Archive</a></router-link>
          </ul>
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>




</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}





.nav{
  margin-bottom: 50px;
}
</style>
