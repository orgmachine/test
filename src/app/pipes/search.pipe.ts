import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      if(it.synonyms_name.length !== 0){
        return it.synonyms_name.toLowerCase().includes(terms); 
      }
    });
  }
}