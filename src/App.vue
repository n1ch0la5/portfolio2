<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>
<template>
<div class="max-w-7xl mx-auto p-8 pt-4 md:p-12 md:pt-6 md:pb-8 min-h-screen lg:flex lg:flex-col lg:justify-between">
  <div>
    <div class="w-full text-center lg:text-left lg:flex justify-between items-center py-6 md:mb-8">
      <div class="mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
        <h1 class="text-xl font-semibold"><a href="/" class="">Nicholas Johnson</a></h1>
        <p class="text-sm font-light">Full Stack Engineer</p>
      </div>
      <nav class="font-extrathin lg:pr-6">
        <router-link class="mr-6" to="/" exact>Home</router-link>
        <router-link to="/gallery">Gallery</router-link>
      </nav>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
  <footer class="flex justify-center pt-8 text-center">
    <p class="text-sm font-thin">&copy;{{year}} Nicholas S. Johnson Full Stack Engineer Portfolio.</p>
  </footer>
</div>
</template>
<style scoped>
  .router-link-active{
    font-weight: 600;
    text-decoration: underline;
  }
</style>