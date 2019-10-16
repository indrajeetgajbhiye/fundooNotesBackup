import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      console.log("!value", value)
      return value.reverse();
    }
    if (value == '') {
      console.log("value", value)
      return value.reverse();
    }
    if (!args) {
      console.log("!args", value)
      return value.reverse();
    }
    return value.filter(array =>
      array.title.toLowerCase().indexOf(args.toLowerCase())!==-1 || array.description.toLowerCase().indexOf(args.toLowerCase()) !==-1 )
  }
}

