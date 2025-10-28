<template>
  <h2
    :class="[
      'font-semibold leading-snug text-center',
      sizeClass,
      colorClass,
    ]"
  >
    <slot />
  </h2>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md', // sm, md, lg
  },
  color: {
    type: String,
    default: 'white',
  },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-lg md:text-xl'
    case 'md':
      return 'text-2xl md:text-3xl'
    default:
      return 'text-3xl md:text-4xl'
  }
})

const colorClass = computed(() => {
  return props.color === 'black'
    ? 'text-gray-900'
    : props.color === 'gray'
    ? 'text-gray-400'
    : 'text-white'
})
</script>