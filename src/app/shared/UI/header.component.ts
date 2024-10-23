import { Component, inject, OnInit } from '@angular/core';

import { initFlowbite } from 'flowbite';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styles: ``
})
export default class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
    clicks = false;
    private router = inject(Router);
  ngOnInit() {
    initFlowbite();
  }

  logout() {

    this.authService.logout();
    this.clicks = false;
    this.router.navigate(['/']);
  }

  nuevotorneo() {
    this.router.navigate(['/torneos'], {
      replaceUrl: true,
    });
  }

  enfrentamientos() {
    this.router.navigate(['/enfrentamientos'], {
      replaceUrl: true,
    });
  }

  crearRol(){
    this.router.navigate(['/crear-roles'], {
      replaceUrl: true,
    });
  }
  newadmin(){
    this.router.navigate(['/newadmin'], {
      replaceUrl: true,
    });
  }
  tabla(){
    this.router.navigate(['/tabla'], {
      replaceUrl: true,
    });
  }
}
