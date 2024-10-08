import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';

@Component({
  selector: 'app-carousel-test',
  standalone: true,
  imports: [],
  templateUrl: './carousel-test.component.html',
  styleUrl: './carousel-test.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselTestComponent {
  slidesPerView: number = 3;
  screenWidth!: number;
  @HostListener('window:resize')
  getScreenWidth() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth >= 320 && this.screenWidth <= 480) {
      this.slidesPerView = 1;
    } else if (this.screenWidth >= 480 && this.screenWidth <= 992) {
      this.slidesPerView = 2;
    }
    else if (this.screenWidth >= 992 && this.screenWidth <= 1200) {
      this.slidesPerView = 3;
    }
  }
}
