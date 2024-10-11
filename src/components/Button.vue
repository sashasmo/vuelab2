<template>
  <button
    class="py-2 px-4 rounded focus:outline-none"
    :class="buttonClass"
    @click="$emit('click')"
  >
    <span v-if="icon" class="material-icons">{{ icon }}</span>
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
  color: {
    type: String,
    default: 'gray',
  },
  size: {
    type: String,
    default: 'medium',
  },
  icon: {
    type: String,
    default: null,
  },
});

const buttonClass = computed(() => {
  return `bg-${color}-500 hover:bg-${color}-700 text-white font-bold ${sizeClass}`;
});
</script>

<style scoped>
.size-small {
  font-size: 0.8rem;
}
.size-medium {
  font-size: 1rem;
}
.size-large {
  font-size: 1.2rem;
}
</style>
