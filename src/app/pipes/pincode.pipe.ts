import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class PincodePipe implements PipeTransform {
  transform(items: any[], pincode: string): any[] {
    if(!items) return [];
    if(!pincode) return items;
    pincode = pincode.toLowerCase();
    console.log(pincode)
          localStorage.setItem('pincode',pincode)
      console.log(localStorage.getItem('pincode'))
    return items.filter( it => {
      return it.pincode.toLowerCase().includes(pincode); 
    });
  }
}