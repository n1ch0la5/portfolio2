<script setup lang="ts">
import { BeakerIcon, ArrowLongRightIcon } from '@heroicons/vue/24/solid'
import ProfileComponent from '../components/ProfileComponent.vue'

function getImageUrl(name: string) {
  return new URL(`../assets/${name}.svg`, import.meta.url).href
}

const devLogos = [
  {name: 'Laravel', svg: 'laravel'},
  {name: 'Vite', svg: 'vitejs'},
  {name: 'VueJS', svg: 'vue'},
  {name: 'ReactJS', svg: 'react'},
  {name: 'TailwindCSS', svg: 'tailwind'},
  {name: 'Wordpress', svg: 'wordpress'},
]
</script>
<template>
  <div class="lg:flex lg:justify-between pb-8">
    <div class="w-full pl-0 lg:w-7/12 pt-6 lg:pt-12 lg:pr-32 mb-24 lg:mb-0">
      <h2 class="text-3xl font-bold tracking-tight mb-6">Hi, I'm Nick.</h2>
      <div class="text-gray-600 pb-10 leading-relaxed">

      <p class="mb-6">
         I'm a full stack engineer with a passion for creating intuitive and engaging user experiences. I have honed my skills for over 15 years to become proficient in multiple languages and frameworks including Laravel, Vue.js, ReactJS, Typescript, Wordpress, and more.
      </p>
      </div>
      <div class="mb-20 text-center lg:text-left">
        <router-link class="mx-auto font-semibold text-center px-8 py-3 rounded-full bg-gray-100 shadow-sm hover:bg-gray-50" to="/gallery">View Gallery <ArrowLongRightIcon class="h-5 inline" /></router-link>
      </div>
      <div class="relative">
        <div class="absolute -top-3 mx-auto left-0 right-0 bg-[#e7e8e9] w-28 flex justify-center items-center text-gray-700">
          <BeakerIcon class="h-5" />&nbsp;My toolkit
        </div>
        <div class="grid grid-cols-3 gap-8 text-center mx-auto mt-4 border border-gray-300 rounded-2xl py-8">
          <div v-for="logo in devLogos" :key="logo.name">
              <img 
                class="h-12 mx-auto drop-shadow-lg"
                :src="getImageUrl(logo.svg)" 
                :alt="logo.name"
                :title="logo.name">
              <p class="sr-only">{{ logo.name }} </p>
          </div>
        </div>
      </div>
    </div>
    <ProfileComponent />
  </div>
</template>
