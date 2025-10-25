<template>
  <nav class="flex gap-4">
    <RouterLink
      v-for="r in routes"
      :key="r.name"
      :to="r.to"
      class="text-sm font-medium text-gray-700 hover:text-primary"
    >
      {{ r.label }}
    </RouterLink>
  </nav>
</template>

<script setup>
const routes = [
  { name: 'report.summary', label: 'Resumen Ejecutivo', to: '/report/summary' },
  { name: 'report.consensus', label: 'Consenso de Voces', to: '/report/consensus' },
  { name: 'report.insights', label: 'Fortalezas y Brechas', to: '/report/insights' },
  { name: 'report.strengths', label: 'Oportunidades', to: '/report/strengths' },
]
</script>