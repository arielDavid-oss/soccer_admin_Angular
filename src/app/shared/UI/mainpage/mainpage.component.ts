import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './mainpage.component.html',
  styles: ``
})
export default class MainpageComponent {

  private router = inject(Router);
  logout() {

    this.router.navigate(['/login']);
  }
  
}
