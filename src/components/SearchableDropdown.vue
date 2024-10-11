<template>
  <div>
    <input
      type="text"
      class="border rounded w-full p-2"
      placeholder="Пошук..."
      v-model="searchQuery"
      @focus="showDropdown = true"
    />
    <ul v-if="showDropdown" class="border rounded">
      <li
        v-for="(item, index) in filteredItems"
        :key="index"
        @click="selectItem(item)"
        class="cursor-pointer hover:bg-gray-200"
      >
        {{ item }}
      </li>
      <li v-if="filteredItems.length === 0" class="p-2">Нічого не знайдено</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  items: Array,
});

const searchQuery = ref('');
const showDropdown = ref(false);

const filteredItems = computed(() => {
  return props.items.filter(item => item.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const selectItem = (item) => {
  searchQuery.value = item;
  showDropdown.value = false;
  emit('select', item);
};
</script>

<style scoped>
</style>
