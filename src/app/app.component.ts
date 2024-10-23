import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import MainpageComponent from "./shared/UI/mainpage/mainpage.component";
import { AuthService } from './services/auth.service';
import HeaderComponent from "./shared/UI/header.component";
import { FooterComponent } from "./shared/UI/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainpageComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'soccer_admin';
  
  private authService = inject(AuthService);
  isAdmin = false;
  ngOnInit() {
    initFlowbite();

    this.authService.isAdmin$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
      
    });
  }
}
