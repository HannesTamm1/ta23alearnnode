import './style.scss';
import { createWebHashHistory,createWebHistory,createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue';


import App from './App.vue';

import Modals from './pages/Modals.vue';
import ToDo from './pages/ToDo.vue';
import Chuck from './pages/Chuck.vue';
<<<<<<< HEAD
=======
import RickAndMorty from './pages/RickAndMorty.vue';
import CookieClicker from './pages/CookieClicker.vue';
import WebApis from './pages/WebApis.vue';
import Leaflet from './pages/Leaflet.vue';
import Chat from './pages/Chat.vue';
>>>>>>> 413c7a5eb200d968ecad14011e5aff154db3d0c4

const routes = [
  { path: '/', component: ToDo, name: 'ToDO' },
  { path: '/modals', component: Modals, name: 'Modals' },
<<<<<<< HEAD
  { path: '/chuck', component: Modals, name: 'Chuck Norris' },
=======
  { path: '/chuck', component: Chuck, name: 'Chuck Norris' },
  { path: '/rickandmorty', component: RickAndMorty, name: 'Rick And Morty' },
  { path: '/cookieclicker', component: CookieClicker, name: 'Cookie Clicker', meta: { container: false } },
  { path: '/webapis', component: WebApis, name: 'WebApis' },
  { path: '/Leaflet', component: Leaflet, name: 'Leaflet', meta: { container: false } },
  { path: '/chat', component: Chat, name: 'Chat' },
>>>>>>> 413c7a5eb200d968ecad14011e5aff154db3d0c4
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');