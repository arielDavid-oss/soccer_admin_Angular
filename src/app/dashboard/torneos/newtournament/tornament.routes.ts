import { Routes } from "@angular/router"

export default [
   
    {
        path:'',
        loadComponent: () => import('./newtournament.component')
    }

]as Routes;