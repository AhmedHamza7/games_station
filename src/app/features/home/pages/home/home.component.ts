import { Component, signal } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../../shared/services/shared.service';
import { GameCardComponent } from '../../../../shared/components/game-card/game-card.component';
import { PageDescriptionComponent } from "../../../../shared/components/page-description/page-description.component";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { NgClass } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, GameCardComponent, PageDescriptionComponent,NgClass, InfiniteScrollModule, LoaderComponent, MatFormFieldModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  gamesFilterCriteria = {
    page: 1,
    page_size: 20
  }
  gamesList = signal<any[]>([]);
  continueScrolling = signal<boolean>(true);
  loading = signal<boolean>(false);
  gridDisplay = signal<'grid' | 'list'>('grid');
  sort = signal<'newest' | 'oldest'>('newest');
  constructor(
    private homeService:HomeService,
    private sharedService: SharedService
  ) {
   }

  ngOnInit(): void {
    this.getGamesList();
  }

  getGamesList() {
    this.loading.set(true);
    this.homeService.getGamesList(this.gamesFilterCriteria).subscribe({
      next:(res:any)=> {
        this.gamesList.update(list=> [...list, ...res.results])
        this.loading.set(false)
      },
      // error:(err:any)=> {
      //   this.sharedService.showError(err)
      // }
  })
  }

  onScroll() {
    console.log((this.gamesFilterCriteria.page / 5));
    console.log((this.gamesFilterCriteria.page / 5) === 0);
    
    
    if ((this.gamesFilterCriteria.page % 5) === 0) { 
      this.continueScrolling.set(false);
      return;
    }
    this.gamesFilterCriteria.page += 1;
    this.getGamesList();
  }

  onContinueScrolling() {
    this.continueScrolling.set(true);
    this.gamesFilterCriteria.page += 1;
    this.getGamesList();
  }

  changeSort(sort:'newest' | 'oldest') {
    this.sort.set(sort);
  }

  changeGridDisplay(gridDisplay:'grid' | 'list') {
    this.gridDisplay.set(gridDisplay);
  }
}
