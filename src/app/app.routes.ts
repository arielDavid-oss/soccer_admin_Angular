import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
    loadChildren: () => 
        import('./shared/UI/mainpage/page.routes')
    },
 
    {
        path: 'login',
    loadChildren: () => 
        import('./login/login.routes')
    },
    
    {
        path: 'page',
    loadChildren: () => 
        import('./shared/UI/login.routes')
    },
    {
        path: 'torneos',
    loadChildren: () => 
        import('./dashboard/torneos/newtournament/tornament.routes')
    },
    {
        path: 'enfrentamientos',
    loadChildren: () => 
        import('./dashboard/torneos/enfrentamientos/enfrentamientos.routes')
    },
    {
        path: 'crear-roles',
    loadChildren: () => 
        import('./dashboard/creacion_de_roles/create.routes')
    },
    {
        path: 'newadmin',
    loadChildren: () => 
        import('./dashboard/newadmins/newadmin.routes')
    },
    {
        path: 'tabla',
    loadChildren: () => 
        import('./dashboard/tablaposiciones/tablaposicion.routes')
    },
    {
        path: '**',
        redirectTo: ''
    }
];
