<template>
  <div id="app">
    <h1>Мій Vue Додаток</h1>
    <router-view /> <!-- Тут буде рендеритися ваш контент на основі активного маршруту -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
</style>
