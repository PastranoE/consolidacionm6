<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Administracion/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Administracion from '@/components/Administracion.vue'
export default {
  name: 'HomeView',

  components: {
    HelloWorld,
Administracion
  }
}
</script>
