import { createRouter, createWebHistory } from 'vue-router'
import Contact from "./views/Contact.vue";
import About from "./views/About.vue"
import Films from "./views/Films.vue";
import Home from "./views/Home.vue";
import Email from "./views/Email.vue";

const routes = [
    { name: 'home', path: '/', redirect: { name: 'Home' } },
    { component: Home, name: 'Home', path: '/home' },
    { component: Contact, name: 'Contact', path: '/contact' },
    { component: About, name: 'About', path: '/about' },
    { component: Films, name: 'Films', path: '/films' },
    { component: Email, name: 'Email', path: '/emails' },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
