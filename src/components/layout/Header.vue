<template>
  <header class="relative bg-[#870958] text-white py-6 px-4 text-center overflow-hidden">

     <!-- Imagen de fondo -->
    <div
      class="absolute inset-0 bg-cover bg-center opacity-5"
      style="background-image: url('/assets/images/img-hd.get-plan-report.webp');"
    ></div>


    <!-- Fondo con cuadrícula -->
    <div class="absolute inset-0 opacity-10 grid-bg"></div>

    <!-- Contenido principal -->
    <div class="relative z-10 flex flex-col items-center justify-center  mt-[150px] mb-[65px]">
      <TypographyH3>
        Reporte creado por <span class="font-semibold">Get a Plan</span>
      </TypographyH3>

      <Title>
        Reporte de<br />entrevistas y voces.
      </Title>

      <Subtitle size="md" color="gray" class="mt-6">
        {{ nombre_empresa }}
      </Subtitle>
    </div>
  </header>
</template>

<script setup>
import Title from '@/components/ui/Title.vue'
import Subtitle from '@/components/ui/Subtitle.vue'
import TypographyH3 from '../ui/TypographyH3.vue'
const nombre_empresa = "Nombre de la empresa"
</script>

<style scoped>
.grid-bg {
  background-image: linear-gradient(rgba(255, 255, 255, 0.5) 1px,
      transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 80px 80px;
}
</style>