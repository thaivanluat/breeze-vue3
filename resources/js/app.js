require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue"
import router from "./router"
import CompanyIndex from "./components/companies/CompaniesIndex"

createApp({
    components: {
        CompanyIndex
    }
}).use(router).mount('#app')
