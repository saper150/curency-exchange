import { Component, ContentChildren, AfterContentInit, QueryList, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CarouselItemComponent } from '../carousel-item/carousel-item.component';

const mod = (x: number, n: number) => (x % n + n) % n;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterContentInit {
  @ContentChildren(CarouselItemComponent) carouselItems: QueryList<CarouselItemComponent>;

  carouselIndex = 0;

  @Output() slideChanged = new EventEmitter();

  private setIndex(index: number) {
    const newIndex = mod(index, this.carouselItems.length);
    if (this.carouselIndex !== newIndex) {
      this.carouselItems.toArray()[this.carouselIndex].deactivate();
      this.carouselItems.toArray()[newIndex].activate();
      this.carouselIndex = newIndex;
      this.slideChanged.next(newIndex);
    }
  }


  ngAfterContentInit(): void {
    Promise.resolve().then(() => {
      this.carouselItems.toArray()[this.carouselIndex].activate();
    });
  }

  nextSlide() {
    this.setIndex(this.carouselIndex + 1);
  }

  prevSlide() {
    this.setIndex(this.carouselIndex - 1);
  }

}
