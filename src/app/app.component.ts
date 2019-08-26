import { Component } from '@angular/core';
import { ExchangeService } from './exchange.service';


interface CurrencyExchange {
  photo: string;
  from: string;
  to: string;
  rate?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  exchangeCurrencies: CurrencyExchange[] = [
    {
      from: 'GBP',
      to: 'EUR',
      photo: 'https://images7.alphacoders.com/425/425475.jpg',
    },
    {
      from: 'CHF',
      to: 'USD',
      photo: 'https://data.1freewallpapers.com/download/kl-ntalersee-glarus-switzerland.jpg',
    },
    {
      from: 'USD',
      to: 'GBP',
      photo: 'https://images7.alphacoders.com/659/659393.jpg',
    },
  ];

  constructor(private exchange: ExchangeService) {
    this.getExchangeRate(this.exchangeCurrencies[0]);
  }

  private getExchangeRate(exchange: CurrencyExchange) {
    this.exchange.getExchangeRate(exchange.from, exchange.to).subscribe(rate => {
      exchange.rate = rate;
    });
  }

  getCssUrl(url: string) {
    return `url(${url})`;
  }


  slideChanged(index: number) {
    this.getExchangeRate(this.exchangeCurrencies[index]);
  }

}
