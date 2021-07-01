<template>
  <v-app>
        <Sidebar/>
        <Footer/>
      <router-view/>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import Vue from "vue";
export default Vue.extend({
  name: 'App',
  components: {
        Footer,
        Sidebar,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
