import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarousalComponent } from './product-carousal.component';

describe('ProductCarousalComponent', () => {
  let component: ProductCarousalComponent;
  let fixture: ComponentFixture<ProductCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarousalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
