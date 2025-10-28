<template>
  <p
    :class="[
      'leading-relaxed text-center',
      sizeClass,
      colorClass,
      weightClass,
    ]"
  >
    <slot />
  </p>
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
  weight: {
    type: String,
    default: 'normal', // light, normal, medium
  },
})

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm md:text-base'
    case 'lg':
      return 'text-lg md:text-xl'
    default:
      return 'text-base md:text-lg'
  }
})

const colorClass = computed(() => {
  return props.color === 'black'
    ? 'text-gray-900'
    : props.color === 'gray'
    ? 'text-gray-300'
    : 'text-white'
})

const weightClass = computed(() => {
  switch (props.weight) {
    case 'light':
      return 'font-light'
    case 'medium':
      return 'font-medium'
    default:
      return 'font-normal'
  }
})
</script>