import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./login.component')
    },
    {
        path: 'admin',
        loadComponent: () => import('../shared/UI/header.component'),
    }
]as Routes;