<template>
  <div>
    <Navbar></Navbar>
    <!-- <RouterLink class="button" to="/">Notes</RouterLink> | 
    <RouterLink class="button" to="/stats">Stats</RouterLink> -->

    <RouterView />
  </div>
</template>

<script setup>
import Navbar from './components/layout/Navbar.vue';
</script>

<style>
  @import 'bulma/css/bulma.min.css'
</style>


