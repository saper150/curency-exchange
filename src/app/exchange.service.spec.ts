/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ExchangeService } from './exchange.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Exchange', () => {

  let httpTestingController: HttpTestingController;
  let service: ExchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeService],
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ExchangeService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should make correct http request', () => {

    service.getExchangeRate('USD', 'GDB').subscribe(rate => {
      expect(rate).toBe(123);
    });
    const request = httpTestingController.expectOne(req => req.url === 'https://api.exchangeratesapi.io/latest');

    expect(request.request.params.get('base')).toBe('USD');
    expect(request.request.params.get('symbol')).toBe('GDB');

    request.flush({ rates: { GDB: 123 } });

  });

});
