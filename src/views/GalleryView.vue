<script setup lang="ts">
import { ref, computed } from "vue"
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
import { useProjectStore } from "../stores/project"

const store = useProjectStore();
const {projects, projectCount } = store;

const selectedId = ref(projects[0].id)
const selected = computed(() => {
  return projects.filter((p) => 
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

const nextProject = (): void => {
  const next = selectedId.value + 1
  if (next > projects.length) {
    selectedId.value = 1
  } else {
    selectedId.value = next
  }
  console.log(selectedId.value);
}

const previousProject = (): void => {
  const next = selectedId.value - 1
  if (next <= 0) {
    selectedId.value = projects.length
  } else {
    selectedId.value = next
  }
  console.log(selectedId.value);
}
</script>
<template>
  <div>
    <div class="w-full flex items-center justify-start space-x-2">
      <div class=" flex space-x-1 items-center justify-center lg:justify-start">
          <ArrowLeftCircleIcon class="text-slate-500 hover:text-slate-400 transition-color duration-200 w-8" @click="previousProject" />
          <ArrowRightCircleIcon class="text-slate-500 hover:text-slate-400 transition-color duration-200 w-8" @click="nextProject"  />
      </div>
      <p class="text-sm font-light text-gray-600">{{ selectedId }} of {{ projectCount }} projects</p>
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
