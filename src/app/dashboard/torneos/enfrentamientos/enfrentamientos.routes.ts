import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./enfrentamientos.component')
    }

]as Routes;