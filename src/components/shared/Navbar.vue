<template>
  <header class="flex w-full justify-center bg-[#8B1C5A] py-4">
    <div class="flex w-full max-w-[953px] items-center justify-between px-6">
      <!-- Logo -->
      <h1 class="text-white text-2xl font-semibold tracking-tight">
        Get<span class="text-white font-light">^</span>Plan
      </h1>

      <!-- Navegación -->
      <nav class="flex gap-10">
        <RouterLink
          v-for="r in routes"
          :key="r.name"
          :to="r.to"
          class="text-white/90 font-medium text-[15px] transition-all duration-200 hover:text-white"
          :class="{ 'font-semibold text-white': isActive(r.to) }"
        >
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
  { name: 'report.summary', label: 'Resumen ejecutivo', to: '/report/summary' },
  { name: 'report.consensus', label: 'Consenso de voces', to: '/report/consensus' },
  { name: 'report.insights', label: 'Fortalezas, Brechas y Oportunidades', to: '/report/insights' }
]

const isActive = (path) => route.path === path
</script>