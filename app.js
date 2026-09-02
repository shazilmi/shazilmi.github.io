const { createApp } = Vue;

const {
  createRouter,
  createWebHashHistory
} = VueRouter;

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

const app = createApp({});

app.use(router);

app.mount('#app');

