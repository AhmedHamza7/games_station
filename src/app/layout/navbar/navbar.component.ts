import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  windowScrolled: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset
    scrollTop > 70 ? this.windowScrolled = true : this.windowScrolled = false;
  }
  constructor() { }

  log(){
    console.log('redy');
    
  }
  

  ngOnInit(): void {
  }

}
