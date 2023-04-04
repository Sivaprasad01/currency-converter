import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  value = 0;
  currencyCode = 'USD';
  targetCurrency = 'USD';
  convertedValue = '';

  currencyCodes = ['USD','INR', 'EUR', 'GBP', 'JPY', 'AUD'];

  convert(targetCurrency: string = this.targetCurrency): void {
    const exchangeRates: { [key: string]: number } = {
      USD: 1,
      INR:82.36,
      EUR: 0.84,
      GBP: 0.72,
      JPY: 109.53,
      AUD: 1.29
    };

    const convertedValue =
      (this.value / exchangeRates[this.currencyCode]) * exchangeRates[targetCurrency];
    const symbol = this.currencySymbol[targetCurrency];

    this.convertedValue = `${symbol}${convertedValue.toFixed(2)}`;
  }

  get currencySymbol(): { [key: string]: string } {
    return {
      USD: '$',
      INR: '₹',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
      AUD: 'A$'
    };
  }
}