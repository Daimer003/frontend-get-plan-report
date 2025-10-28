<template>
  <header class="relative bg-[#8A1F61] text-white py-24 px-4 text-center overflow-hidden">
    <!-- Fondo con cuadrícula -->
    <div class="absolute inset-0 opacity-10 grid-bg"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 flex flex-col items-center justify-center">
      <p class="text-sm font-medium mb-4">
        Reporte creado por <span class="font-semibold">Get a Plan</span>
      </p>
      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
        Reporte de<br />
        entrevistas y voces.
      </h1>
      <p class="mt-6 text-lg font-medium opacity-90">
        {{ nombre_empresa }}
      </p>
    </div>
  </header>
</template>

<script setup>
const nombre_empresa = "Nombre de la empresa"
</script>

<style scoped>
.grid-bg {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.2) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>