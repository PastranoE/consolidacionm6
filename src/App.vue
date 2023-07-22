<template>
  <div id="app">
    <nav class="navbar bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand"><i class="fas fa-thin fa-gamepad fa-2xs" style="color: #ecf0f3;"> Games Opinión</i></a>
    <form class="d-flex" role="search">
      <router-link to="/"> <i class="fas fa-home fa-2xs" style="color: #eff1f6;"> Home</i> </router-link> 
    </form>
  </div>
</nav>


      


            <!-- <router-link to="/about">About</router-link>
<router-link to="/Opiniones">| Opiniones</router-link>
<router-link to="/Administracion">| Administracion</router-link>
<router-link to="/registro_cuenta">| registro de cuenta</router-link> -->




    <router-view/> 

    
  </div>
</template>
<script>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
