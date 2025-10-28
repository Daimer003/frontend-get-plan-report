<template>
  <header class="flex w-full justify-center  py-6 top-0 absolute z-99">
    <div class="flex w-full max-w-[953px] items-center justify-between px-6">
      <!-- Logo -->
      <h1 class="text-white text-2xl font-semibold tracking-tight">
        Get<span class="text-white font-light">^</span>Plan
      </h1>

      <!-- Navegación -->
      <nav class="flex gap-10">
        <RouterLink v-for="r in routes" :key="r.name" :to="r.to" class="nav-link"
          :class="{ 'nav-link--active': isActive(r.to) }">
          {{ r.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const routes = [
  { name: 'report.summary', label: 'Resumen ejecutivo', to: '/summary' },
  { name: 'report.consensus', label: 'Consenso de voces', to: '/consensus' },
  { name: 'report.insights', label: 'Fortalezas, Brechas y Oportunidades', to: '/insights' }
]

const isActive = (path) => route.path === path
</script>

<style scoped>
.nav-link {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: clamp(0.9375rem, 1vw + 0.25rem, 1rem);
  /* 15px → 16px */
  line-height: 1.5rem;
  /* 24px */
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #ffffff;
}

.nav-link--active {
  color: #ffffff;
  font-weight: 600;
  /* Semibold */
}
</style>