import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./creacion-de-roles.component')
    }

]as Routes;