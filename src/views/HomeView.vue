<template>
  <div>
    <h1>Головна сторінка</h1>
    <p>Спеціальність: 121 ІПЗ</p>
    <p>Курс: 2 курс магістр</p>
    <p>Група: 8.1213</p>
    <p>ПІБ: Смотрицька О.Р.</p>
    <p>Привіт, ласкаво просимо на домашню сторінку нашого Vue додатку!</p>
    <button @click="handleClick">Кнопка 1</button>
    <button @click="handleClick">Кнопка 2</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    handleClick() {
      alert('Кнопка натиснута!');
    }
  }
}
</script>

<style scoped>
/* Додайте стилі тут, якщо потрібно */
</style>
