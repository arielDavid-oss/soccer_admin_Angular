import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./newadmins.component')
    }

]as Routes;