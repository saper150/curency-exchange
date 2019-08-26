import { TestBed, async, ComponentFixtureNoNgZone } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CarouselModule } from './carouselModule/carousel.module';
import { ExchangeService } from './exchange.service';
import { of } from 'rxjs';


class MockExchangeService {
  getExchangeRate() {
    return of(10);
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [CarouselModule],
      providers: [{ provide: ExchangeService, useClass: MockExchangeService }]
    }).compileComponents();
  }));

  it('getCssUrl should return url wrapped in "url"', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance.getCssUrl('http://catimages/cat1')).toBe('url(http://catimages/cat1)');
  });

  it('slideChanged should set exchange rate of currency at given index', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.componentInstance.slideChanged(0);
    expect(fixture.componentInstance.exchangeCurrencies[0].rate).toBe(10);
  });

});
