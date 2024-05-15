<script setup lang="ts">
import { ref, computed, onMounted } from "vue"
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'

const projects = ref([
  {id: 1, title: 'Cardinal Financial', url: 'cardinalfinancial.com', link: 'https://www.cardinalfinancial.com', description: 'CF.com\'s Customer facing website.', about: "I had the opportunity to collaborate with a team of 5 developers to contribute to the development and maintenance of Cardinal Financial's new customer-facing website. Leveraging the power of Wordpress and Vue.js, we created a seamless user journey that guides customers through the mortgage process, from initial inquiry to purchase. The result was a dynamic and intuitive website that effectively meets the needs of our users.", name: 'cardinalfinancial.com', image: 'cf_com', logos: ['wordpress', 'vue']},
  {id: 2, title: 'CF Hub', url: 'thehub.cardinalfinancial.com', link: '', description: 'Cardinal Financial Employee hub.', about: "As my inaugural project with Cardinal Financial, I had the privilege of working alongside two other developers to build and maintain a new employee-facing hub, complete with company announcements, achievements, and other engaging features. Utilizing Wordpress and Vue.js, we were able to create a dynamic and user-friendly intranet that fosters communication and collaboration within the organization. Overall, it was a rewarding experience and I am excited to see how this resource continues to support and enhance the experience of our employees.", name: 'thehub', image: 'thehub', logos: ['wordpress', 'vue']},
  {id: 3, title: 'Ringlead Sales Dialer', url: '', link: '', description: 'Internal Sales Dialer used by our team of 200+ Salesmen.', about: "Worked with a team of developers to create an internal sales dialer in Vite/Vue/Typescript. I was in charge of creating pinia stores and using websockets and middle out compression to connect our front and back ends for lightning quick response times.", name: 'Ringlead', image: 'ringlead', logos: ['vue']},
  {id: 4, title: 'Total Mortgage', url: 'totalmortgage.com', link: 'https://www.totalmortgage.com', description: 'Customer facing website', about: "One of my first significant projects using the Laravel framework was the development of totalmortgage.com. Alongside my team, I employed Laravel and Vue.js to create a comprehensive mortgage website that featured a customer portal for tracking loan progress (think Dominos pizza tracker for mortgages). The result was a user-friendly and efficient platform that streamlined the mortgage process for both customers and the company. This project presented a great opportunity for me to demonstrate my skills and expand my expertise in Laravel and Vue.js, and it was both challenging and rewarding.", name: 'totalmortgage.com', image: 'tms_com', logos: ['laravel', 'vue']},
  {id: 5, title: 'TMS Embr', url: 'marketing.totalmortgage.com', link: '', description: 'Marketing task manager, and promotional material generator.', about: "As a developer, I had the chance to work on a project called Embr, an in-house task manager and promotional material generator specifically designed for the Total Mortgage marketing team. With features similar to Asana or Monday, Embr was built using React and a Laravel backend/API and marked my first experience working with JavaScript frameworks. Embr served as a valuable tool for the marketing team, helping them to organize and manage their tasks and promotional materials more efficiently. It was a challenging and rewarding project that allowed me to expand my skills and deepen my understanding of these technologies.", name: 'embr', image: 'embr', logos: ['laravel', 'react']},
]);

const selectedId = ref(projects.value[0].id)
const selected = computed(() => {
  return projects.value.filter((p) => 
    p.id === selectedId.value
  )[0]
})

const isSelected = (id: number) => {
 return selectedId.value === id
}

const getImageUrl = (name: string) => {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href
}

const getSvgUrl = (name: string) => {
  return new URL(`../assets/${name}.svg`, import.meta.url).href
}

const nextProject = () => {
  const next = selectedId.value + 1
  if (next > projects.value.length) {
    selectedId.value = 1
  } else {
    selectedId.value = next
  }
  console.log(selectedId.value);
}

const previousProject = () => {
  const next = selectedId.value - 1
  if (next <= 0) {
    selectedId.value = projects.value.length
  } else {
    selectedId.value = next
  }
  console.log(selectedId.value);
}

onMounted(() => {
  console.log(projects);
});
</script>
<template>
  <div>
    <div class="w-full flex space-x-1 items-center justify-center lg:justify-start mb-3">
        <ArrowLeftCircleIcon class="text-slate-500 hover:text-slate-400 transition-color duration-200 w-8" @click="previousProject" />
        <ArrowRightCircleIcon class="text-slate-500 hover:text-slate-400 transition-color duration-200 w-8" @click="nextProject"  />
      </div>
  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start pb-8 pt-6 lg:pt-0">
    
    <div class="w-full lg:w-1/3 lg:pr-10 mb-24 lg:mb-0 order-2 lg:order-1">
      <div class="mt-8 lg:mt-4 mb-1 flex items-center justify-between space-x-3">
        <h1 class="text-2xl">{{ selected.title }}</h1>
        <div class="flex justify-start items-center mb-3">
        <img 
        v-for="logo in selected.logos" 
        :key="logo" 
        :src="getSvgUrl(logo)"
        class="h-8 mr-3" />
      </div>
        
      </div>
      <p class=" font-light text-gray-600 mb-2 italic"> {{ selected.url }} </p>
      <p class="text-sm font-semibold text-gray-600 mb-4"> {{ selected.description }} </p>
      
      <p class="text-sm text-gray-600 mb-12 leading-loose"> {{ selected.about }} </p>
      <div>
          <img 
            class="mx-auto h-full w-full object-cover object-center border border-slate-300 shadow-lg hidden"
            :src="getImageUrl(selected.image)" 
            :alt="selected.name"
            :title="selected.name">
      </div>
    </div>
    <div class="w-full lg:w-2/3 order-1 lg:order-2">
     
      <div class="mb-8">
        
          <img 
            class="mx-auto h-full w-full object-cover object-center lg:block border border-slate-300 shadow rounded-xl"
            :src="getImageUrl(selected.image)" 
            :alt="selected.name"
            :title="selected.name">
      </div>
        <div class="flex items-center space-x-6">
          <div 
            v-for="(project) in projects" 
            :key="project.id"
            :class="(isSelected(project.id)) ? 'border-2 border-cyan-500 shadow grayscale-0 opacity-100' : 'grayscale opacity-60'"
            class="w-28 cursor-pointer hover:grayscale-0 hover:border-2 hover:scale-105 hover:border-cyan-500 hover:shadow transition-all duration-200 hover:opacity-100"
            @click="selectedId = project.id"
            >
            <div class="overflow-hidden">
            <img 
              class=" mx-auto h-full w-full object-cover object-center"
              :src="getImageUrl(project.image)" 
              :alt="project.name"
              :title="project.name">
            </div>
          </div>
        </div>
    </div>
  </div>
  </div>
</template>
