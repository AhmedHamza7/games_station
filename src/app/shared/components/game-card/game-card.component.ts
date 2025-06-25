import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss'
})
export class GameCardComponent {

  constructor() { }

  getBgImg(img:any){
    // this._gamesService.messageSource.next(img)
  }

  ngOnInit(): void {
    // this._gamesService.getAllGames('games').subscribe({
    //   next:(res:any)=> {
    //     this.allGames = res.results
    //     console.log(this.allGames);
    //                   }
      
    // })
  }
}
