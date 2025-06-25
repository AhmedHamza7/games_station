import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // #homePageTitle = signal<string>('');
  // homePageTitle = this.#homePageTitle.asReadonly();

  constructor(
    private router: Router
  ) { }

  // setHomePageTitle(title: string) {
  //   this.#homePageTitle.set(title);
  // }

}
