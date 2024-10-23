import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styles: ``
})
export default class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  isAdmin = false;

  logout() {
    this.router.navigate(['/page'], {
      replaceUrl: true,
    });
  }

  onAccess(){
        //console.log('accesos correcto:', response);
        localStorage.setItem('isAdmin', 'true');
        this.authService.loginAsAdmin();
        this.router.navigate(['/admin'], {
          replaceUrl: true,
        });
  }
      
}
