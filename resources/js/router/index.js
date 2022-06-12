import { createRouter, createWebHistory} from "vue-router";

import CompanyIndex from '../components/companies/CompaniesIndex'

const routes = [
    {
        path: '/dashboard',
        name: 'company.index',
        component: CompanyIndex
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
