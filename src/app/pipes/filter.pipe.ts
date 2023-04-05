import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {

  // takes 2 inputs - an array and the search text to filter the array with
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

}
