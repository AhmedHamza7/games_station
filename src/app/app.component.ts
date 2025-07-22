import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { filter } from 'rxjs';
import { SharedService } from './shared/services/shared.service';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'games-station';
  defaultLayoutPages = ['login', 'register'];
  showBtnTop = false;
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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
      if (window.scrollY > 1000) {
        this.showBtnTop = true;
      } else {
        this.showBtnTop = false;
      }
  }


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    
}
