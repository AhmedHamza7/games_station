import { Component } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from '../../../../shared/services/shared.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  allGames:any[] = []
  constructor(
    private homeService:HomeService,
    private sharedService: SharedService
  ) {
   }

  ngOnInit(): void {
    this.getGamesList();
  }

  getGamesList() {
    this.homeService.getAllGames().subscribe({
      next:(res:any)=> {
        this.allGames = res.results
        console.log(this.allGames);
      },
      // error:(err:any)=> {
      //   this.sharedService.showError(err)
      // }
  })
  }
}
