import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../../shared/services/shared.service';
import { GameCardComponent } from '../../../../shared/components/game-card/game-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  gamesList:any[] = []
  constructor(
    private homeService:HomeService,
    private sharedService: SharedService
  ) {
   }

  ngOnInit(): void {
    this.getGamesList();
  }

  getGamesList() {
    this.homeService.getGamesList().subscribe({
      next:(res:any)=> {
        this.gamesList = res.results
        console.log(this.gamesList);
      },
      // error:(err:any)=> {
      //   this.sharedService.showError(err)
      // }
  })
  }
}
