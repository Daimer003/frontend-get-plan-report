<template>
  <h1
    :class="[
      'font-extrabold leading-tight text-center',
      sizeClass,
      colorClass,
      uppercase ? 'uppercase' : '',
    ]"
  >
    <slot />
  </h1>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'xl', // sm, md, lg, xl
  },
  color: {
    type: String,
    default: 'white', // puedes pasar 'black' o 'gray'
  },
  uppercase: {
    type: Boolean,
    default: false,
  },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-xl md:text-2xl'
    case 'md':
      return 'text-3xl md:text-4xl'
    case 'lg':
      return 'text-4xl md:text-5xl'
    default:
      return 'text-5xl md:text-6xl'
  }
})

const colorClass = computed(() => {
  return props.color === 'black'
    ? 'text-gray-900'
    : props.color === 'gray'
    ? 'text-gray-500'
    : 'text-white'
})
</script>