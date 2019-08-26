import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselItemComponent } from './carousel-item/carousel-item.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CarouselComponent, CarouselItemComponent],
  exports: [CarouselComponent, CarouselItemComponent],
})
export class CarouselModule { }
