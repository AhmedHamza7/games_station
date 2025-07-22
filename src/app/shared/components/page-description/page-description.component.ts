import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-description',
  standalone: true,
  imports: [],
  templateUrl: './page-description.component.html',
  styleUrl: './page-description.component.scss'
})
export class PageDescriptionComponent {
  @Input() title!: string;
  @Input() description!: string;
}
