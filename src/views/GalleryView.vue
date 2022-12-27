<script setup lang="ts">
import { ref, computed } from "vue"

const projects = [
{id: 1, title: 'Cardinal Financial', url: 'cardinalfinancial.com', description: 'CF.com\'s Customer facing website.', about: "I had the opportunity to collaborate with a team of 5 developers to contribute to the development and maintenance of Cardinal Financial's new customer-facing website. Leveraging the power of Wordpress and Vue.js, we created a seamless user journey that guides customers through the mortgage process, from initial inquiry to purchase. The result was a dynamic and intuitive website that effectively meets the needs of our users.", name: 'cardinalfinancial.com', image: 'cf_com', logos: ['wordpress', 'vue']},
{id: 2, title: 'CF Hub', url: 'thehub.cardinalfinancial.com', description: 'Cardinal Financial Employee hub.', about: "As my inaugural project with Cardinal Financial, I had the privilege of working alongside two other developers to build and maintain a new employee-facing hub, complete with company announcements, achievements, and other engaging features. Utilizing Wordpress and Vue.js, we were able to create a dynamic and user-friendly intranet that fosters communication and collaboration within the organization. Overall, it was a rewarding experience and I am excited to see how this resource continues to support and enhance the experience of our employees.", name: 'thehub', image: 'thehub', logos: ['wordpress', 'vue']},
{id: 3, title: 'Total Mortgage', url: 'totalmortgage.com', description: 'Customer facing website', about: "One of my first significant projects using the Laravel framework was the development of totalmortgage.com. Alongside my team, I employed Laravel and Vue.js to create a comprehensive mortgage website that featured a customer portal for tracking loan progress (think Dominos pizza tracker for mortgages). The result was a user-friendly and efficient platform that streamlined the mortgage process for both customers and the company. This project presented a great opportunity for me to demonstrate my skills and expand my expertise in Laravel and Vue.js, and it was both challenging and rewarding.", name: 'totalmortgage.com', image: 'tms_com', logos: ['laravel', 'vue']},
{id: 4, title: 'TMS Embr', url: 'marketing.totalmortgage.com', description: 'Marketing task manager, and promotional material generator.', about: "As a developer, I had the chance to work on a project called Embr, an in-house task manager and promotional material generator specifically designed for the Total Mortgage marketing team. With features similar to Asana or Monday, Embr was built using React and a Laravel backend/API and marked my first experience working with JavaScript frameworks. Embr served as a valuable tool for the marketing team, helping them to organize and manage their tasks and promotional materials more efficiently. It was a challenging and rewarding project that allowed me to expand my skills and deepen my understanding of these technologies.", name: 'embr', image: 'embr', logos: ['laravel', 'react']},
]

const selectedId = ref(projects[0].id)
const selected = computed(() => {
  return projects.filter((p) => 
    p.id === selectedId.value
  )[0]
})

function isSelected(id: number) {
 return selectedId.value === id
}

function getImageUrl(name: string) {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href
}

function getSvgUrl(name: string) {
  return new URL(`../assets/${name}.svg`, import.meta.url).href
}
</script>
<template>
  <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start pb-8 pt-6 lg:pt-0">
    <div class="w-full lg:w-1/3 lg:pr-10 mb-24 lg:mb-0 order-2 lg:order-1">
      <h1 class="mt-12 lg:mt-6 text-2xl mb-1">{{ selected.title }}</h1>
      <p class=" font-light text-gray-600 mb-2 italic"> {{ selected.url }} </p>
      <p class="text-sm font-semibold text-gray-600 mb-4"> {{ selected.description }} </p>
      <div class="flex justify-start items-center mb-3">
          <img 
          v-for="logo in selected.logos" 
          :key="logo" 
          :src="getSvgUrl(logo)"
          class="h-8 mr-3" />
        </div>
      <p class="text-base text-gray-600 mb-12 -tracking-tight"> {{ selected.about }} </p>
      <div>
          <img 
            class=" mx-auto h-full w-full object-cover object-center lg:hidden"
            :src="getImageUrl(selected.image)" 
            :alt="selected.name"
            :title="selected.name">
          </div>
    </div>
    <div class="w-full lg:w-2/3 order-1 lg:order-2">
        <div class="grid grid-cols-2 gap-6">
          <div 
            v-for="(project) in projects" 
            :key="project.id"
            :class="(isSelected(project.id)) ? 'border-8 border-gray-50 shadow-xl grayscale-0 opacity-100' : 'grayscale opacity-60'"
            class="w-full cursor-pointer hover:grayscale-0 hover:border-8 hover:border-gray-50 hover:shadow-xl transition-all duration-150 hover:opacity-100"
            @click="selectedId = project.id"
            >
            <div class="overflow-hidden">
            <img 
              class=" mx-auto h-full w-full object-cover object-center"
              :src="getImageUrl(project.image)" 
              :alt="project.name"
              :title="project.name">
            </div>
            <div class="bg-gray-700 flex justify-between items-center p-3 pl-5">
              <h3 class="text-gray-200 font-light tracking-wide">
                {{ project.name }}
              </h3>
              <div class="hidden lg:flex">
                <img 
                v-for="logo in project.logos" 
                :key="logo" 
                :src="getSvgUrl(logo)"
                class="h-5 mr-2" />
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
