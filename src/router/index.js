import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // імпорт компоненту

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView // компонент, який рендериться за цим маршрутом
  },
  // Додайте більше маршрутів, якщо потрібно
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
