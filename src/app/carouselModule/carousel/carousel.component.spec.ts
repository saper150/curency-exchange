/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, QueryList } from '@angular/core';

import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let mockQueryList

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;

    const arr = [
      {
        deactivate: jasmine.createSpy(),
        activate: jasmine.createSpy(),
      },
      {
        activate: jasmine.createSpy(),
        deactivate: jasmine.createSpy(),
      },
    ];

    mockQueryList = {
      length: 2,
      _arr: arr,
      toArray: () => arr
    };
  });


  it('nextSlide should change slide index', () => {

    component.carouselItems = mockQueryList;
    component.nextSlide();
    expect(component.carouselIndex).toBe(1);
  });

  it('nextSlide should wrap', () => {

    component.carouselItems = mockQueryList;
    component.nextSlide();
    component.nextSlide();
    expect(component.carouselIndex).toBe(0);
  });

  it('nextSlide should call activate on next slide and deactivate on previous slide', () => {
    component.carouselItems = mockQueryList;
    component.nextSlide();
    expect(mockQueryList._arr[0].deactivate).toHaveBeenCalled();
    expect(mockQueryList._arr[1].activate).toHaveBeenCalled();
  });


});
