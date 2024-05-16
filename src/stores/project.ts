import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectStore = defineStore('project', () => {

    interface Project {
        id: number,
        title: string,
        url: string,
        link: string,
        description: string,
        about: string,
        name: string,
        image: string,
        logos: string[]
    }

    const projects = ref<Project[]>([
        {id: 1, title: 'Cardinal Financial', url: 'cardinalfinancial.com', link: 'https://www.cardinalfinancial.com', description: 'CF.com\'s Customer facing website.', about: "I had the opportunity to collaborate with a team of 5 developers to contribute to the development and maintenance of Cardinal Financial's new customer-facing website. Leveraging the power of Wordpress and Vue.js, we created a seamless user journey that guides customers through the mortgage process, from initial inquiry to purchase. The result was a dynamic and intuitive website that effectively meets the needs of our users.", name: 'cardinalfinancial.com', image: 'cf_com', logos: ['wordpress', 'vue']},
        {id: 2, title: 'CF Hub', url: 'thehub.cardinalfinancial.com', link: '', description: 'Cardinal Financial Employee hub.', about: "As my inaugural project with Cardinal Financial, I had the privilege of working alongside two other developers to build and maintain a new employee-facing hub, complete with company announcements, achievements, and other engaging features. Utilizing Wordpress and Vue.js, we were able to create a dynamic and user-friendly intranet that fosters communication and collaboration within the organization. Overall, it was a rewarding experience and I am excited to see how this resource continues to support and enhance the experience of our employees.", name: 'thehub', image: 'thehub', logos: ['wordpress', 'vue']},
        {id: 3, title: 'Ringlead Sales Dialer', url: '', link: '', description: 'Internal Sales Dialer used by our team of 200+ Salesmen.', about: "Worked with a team of developers to create an internal sales dialer in Vite/Vue/Typescript and a Python Backend on AWS. I was in charge of creating pinia stores and implementing websockets with middle out compression to connect our front and back ends for lightning quick response times.", name: 'Ringlead', image: 'ringlead', logos: ['vue']},
        {id: 4, title: 'Total Mortgage', url: 'totalmortgage.com', link: 'https://www.totalmortgage.com', description: 'Customer facing website', about: "One of my first significant projects using the Laravel framework was the development of totalmortgage.com. Alongside my team, I employed Laravel and Vue.js to create a comprehensive mortgage website that featured a customer portal for tracking loan progress (think Dominos pizza tracker for mortgages). The result was a user-friendly and efficient platform that streamlined the mortgage process for both customers and the company. This project presented a great opportunity for me to demonstrate my skills and expand my expertise in Laravel and Vue.js, and it was both challenging and rewarding.", name: 'totalmortgage.com', image: 'tms_com', logos: ['laravel', 'vue']},
        {id: 5, title: 'TMS Embr', url: 'marketing.totalmortgage.com', link: '', description: 'Marketing task manager, and promotional material generator.', about: "I had the chance to work on a project called Embr, an in-house task manager and promotional material generator specifically designed for the Total Mortgage marketing team. With features similar to Asana or Monday, Embr was built using React and a Laravel backend/API and marked my first experience working with JavaScript frameworks. Embr served as a valuable tool for the marketing team, helping them to organize and manage their tasks and promotional materials more efficiently. It was a challenging and rewarding project that allowed me to expand my skills and deepen my understanding of these technologies.", name: 'embr', image: 'embr', logos: ['laravel', 'react']},
      ]);

      const projectCount = computed(() => projects.value.length)
  
    return { projects, projectCount }
  })