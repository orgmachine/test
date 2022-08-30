import { Pipe, PipeTransform } from "@angular/core";
  
@Pipe({
  name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
  transform(items: any, letter: string): any[] {
    console.log(items,letter)
    var filtered = [];
    var letterMatch = new RegExp(letter, 'i');
    console.log(letterMatch)
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      console.log(item)
      if (letterMatch.test(item.test_name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
}