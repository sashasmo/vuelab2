import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Імпортуємо роутер

createApp(App)
  .use(router) // Додаємо роутер
  .mount('#app');
