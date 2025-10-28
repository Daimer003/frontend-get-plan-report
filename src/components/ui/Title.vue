<template>
  <h1 class="text-h1">
    <slot />
  </h1>
</template>

<style scoped>
.text-h1 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  /* Escala fluida: 36px en móvil → 72px en desktop */
  font-size: clamp(2.25rem, 5vw + 1rem, 4.5rem);
  line-height: clamp(2.75rem, 5vw + 1rem, 5.625rem);
  letter-spacing: -0.02em;
  color: #ffffff;
  text-align: center;
}
</style>