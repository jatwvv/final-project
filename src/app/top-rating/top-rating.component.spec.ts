import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatingComponent } from './top-rating.component';

describe('TopRatingComponent', () => {
  let component: TopRatingComponent;
  let fixture: ComponentFixture<TopRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
