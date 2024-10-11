<template>
  <div>
    <h1 class="text-center">Ваші дані</h1>
    <p>Спеціальність: 121 ІПЗ</p>
    <p>Курс: 2 курс магістр</p>
    <p>Група: 8.1213</p>
    
    <Button label="Натисни мене" color="blue" size="medium" icon="add" @click="handleClick" />
    
    <SearchableDropdown :items="['Item 1', 'Item 2', 'Item 3']" @select="handleSelect" />
  </div>
</template>

<script setup>
import Button from './Button.vue';
import SearchableDropdown from './SearchableDropdown.vue';

const handleClick = () => {
  alert('Кнопка натиснута!');
};

const handleSelect = (item) => {
  alert(`Ви вибрали: ${item}`);
};
</script>

<style scoped>
/* Додайте стилі, якщо потрібно */
</style>
