<template>
  <span class="text-span">
    <slot />
  </span>
</template>

<style scoped>
.text-span {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #ffb5da;
  text-align: center;
  display: inline-block;

  /* Escala fluida: 16px (móvil) → 20px (desktop) */
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
  line-height: clamp(1.5rem, 1.5vw + 0.5rem, 1.875rem);
  letter-spacing: 0;
}
</style>