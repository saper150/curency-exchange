import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {

  isActive = false;

  activate() {
    this.isActive = true;
  }

  deactivate() {
    this.isActive = false;
  }

}
