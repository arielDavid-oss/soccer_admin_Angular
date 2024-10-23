import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./header.component')
    }
]as Routes;