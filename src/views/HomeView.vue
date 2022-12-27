<script setup lang="ts">
import { BeakerIcon } from '@heroicons/vue/24/solid'
import { ArrowLongRightIcon } from '@heroicons/vue/24/solid'
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
  <div class="md:flex md:justify-between pb-8">
    <div class="w-full lg:w-7/12 pt-12 lg:pl-4 md:pr-8 lg:pr-32 mb-24 lg:mb-0">
      <h2 class="text-3xl font-bold tracking-tight mb-6">Hi, my name is Nick <span class="sr-only">Johnson</span></h2>
      <div class="text-gray-600 pb-10 leading-relaxed">
      <p class="underline font-semibold text-base mb-4 tracking-wide text-gray-800">
        A little about me and my favorite technologies.
      </p>
      <p class="mb-4">
         As a web developer with a passion for creating intuitive and engaging user experiences, I have honed my skills over the past 15 years to become proficient in multiple languages and frameworks including Laravel, Vue.js, ReactJS, Typescript, and Wordpress.
      </p>
      <p class="mb-4">  
        This site was built with a custom vite/vue3/tailwindcss github template created by me for rapid development. See vite-vue3-starter for the template and portfolio2 for this site on my Github profile.
      </p>
      </div>
      <div class="mb-16 text-center md:text-left">
        <router-link class="mx-auto font-semibold text-center px-8 py-3 rounded-full bg-gray-100 shadow-sm hover:bg-gray-50" to="/gallery">View Gallery <ArrowLongRightIcon class="h-5 inline" /></router-link>
      </div>
      <div class="flex justify-center items-center text-gray-700">
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
    <ProfileComponent />
  </div>
</template>
