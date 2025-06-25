import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { filter } from 'rxjs';
import { SharedService } from './shared/services/shared.service';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'games-station';
  defaultLayoutPages = ['login', 'register'];

  currentLayout: 'SIDEBAR' | 'DEFAULT' = 'SIDEBAR';
  constructor(    
    private router:Router,
    private sharedService: SharedService
  ) {}

  ngOnInit() {

    this.router.events
      .pipe(
        filter((event: any): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.defaultLayoutPages.includes(event.urlAfterRedirects.split('/')[1]) ? 
        this.currentLayout = 'DEFAULT' :
        this.currentLayout = 'SIDEBAR';   
      });
  }
    
}
