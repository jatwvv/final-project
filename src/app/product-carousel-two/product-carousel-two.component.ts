import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-carousel-two',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-carousel-two.component.html',
  styleUrl: './product-carousel-two.component.css',
})
export class ProductCarouselTwoComponent {
  right = faArrowRight;
}
