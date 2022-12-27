<script setup lang="ts">
const year: number = new Date().getFullYear()
</script>
<template>
  <div class="max-w-7xl mx-auto p-8 md:p-12 pb-0 md:pb-8 shadow-2xl bg-[#e7e8e9] border border-gray-400 min-h-screen flex flex-col justify-between">
    <div class="">
      <nav class="mb-6 pl-4">
        <router-link to="/" exact>Home</router-link> |
        <router-link to="/gallery">Gallery</router-link>
      </nav>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div class="flex justify-center pt-8 text-center">
      <p class="text-sm font-thin">&copy;{{year}} Nicholas S. Johnson Web Developer Portfolio.</p>
    </div>
  </div>
</template>
<style scoped>
  .router-link-active{
    font-weight: bold;
  }
</style>