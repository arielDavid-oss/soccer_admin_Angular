import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./tablaposiciones.component')
    }

]as Routes;