import { Pipe, PipeTransform } from '@angular/core';

interface CurrencySymbol {
  [key: string]: string;
}

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number, currencyCode: string): string {
    const currencySymbol: CurrencySymbol = {
      USD: '$',
      INR: '₹',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
      AUD: 'A$'
    };

    return `${currencySymbol[currencyCode as keyof CurrencySymbol]}${value.toFixed(2)}`;
  }
}
