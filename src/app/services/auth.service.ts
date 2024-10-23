import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAdminSubject = new BehaviorSubject<boolean>(false);
    isAdmin$ = this.isAdminSubject.asObservable();

    constructor() { 
        const isAdmin = localStorage.getItem('isAdmin') === 'true';
        this.isAdminSubject.next(isAdmin);
    }
    loginAsAdmin() {
        localStorage.setItem('isAdmin', 'true');
        this.isAdminSubject.next(true); // Notificar a los suscriptores
    }
    
    logout() {
        localStorage.removeItem('isAdmin');
        this.isAdminSubject.next(false); // Notificar a los suscriptores
    }

}
