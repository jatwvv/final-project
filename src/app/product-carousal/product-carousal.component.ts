import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-carousal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-carousal.component.html',
  styleUrl: './product-carousal.component.css'
})
export class ProductCarousalComponent {
  right = faArrowRight;
}
