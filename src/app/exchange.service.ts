import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  constructor(private http: HttpClient) {}

  getExchangeRate(from: string, to: string): Observable<number> {
    return this.http.get<any>('https://api.exchangeratesapi.io/latest', {
      params: {
        symbol: to,
        base: from,
      }
    })
    .pipe(map(response => response.rates[to]));
  }


}
