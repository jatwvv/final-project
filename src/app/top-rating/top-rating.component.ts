import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-top-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './top-rating.component.html',
  styleUrl: './top-rating.component.css'
})
export class TopRatingComponent {
  star = faStar
}
