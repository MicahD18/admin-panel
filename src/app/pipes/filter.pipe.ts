import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {

  // takes 2 inputs - an array and the search text to filter the array with
  transform(items: any[] | undefined, searchText: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchText)
    });
  }

}
