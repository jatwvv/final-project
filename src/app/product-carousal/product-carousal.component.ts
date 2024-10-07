import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  NgZone,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-carousal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-carousal.component.html',
  styleUrl: './product-carousal.component.css',
})
export class ProductCarousalComponent implements AfterViewInit {
  @ViewChild('carousel') carouselElement!: ElementRef;
  // leftArrow = faArrowLeft;
  right = faArrowRight;

  private carouselInner!: HTMLElement;
  private items: HTMLElement[] = [];
  private itemWidth = 0;
  private currentIndex = 0;

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.initializeCarousel();
      }, 0);
    });
  }

  private initializeCarousel() {
    this.carouselInner = this.el.nativeElement.querySelector('.carousel-inner');
    this.items = Array.from(this.carouselInner.children) as HTMLElement[];

    if (this.items.length > 0) {
      this.itemWidth = this.items[0].offsetWidth;
    }

    this.updateCarousel();
  }

  private updateCarousel() {
    const translateX = -this.currentIndex * this.itemWidth;
    this.carouselInner.style.transform = `translateX(${translateX}px)`;
  }

  nextSlide() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }
}
