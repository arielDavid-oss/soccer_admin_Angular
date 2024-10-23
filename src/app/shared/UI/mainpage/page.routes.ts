import { Routes } from "@angular/router"

export default [
    {
        path: '',
        loadComponent: () => import('../headermainpager/headermainpager.component'),
    }
]as Routes;