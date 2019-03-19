import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Model/user';

@Pipe({
  name: 'fullname'
})
export class fullnamePipe implements PipeTransform {

  transform(value: User): any {
    return value.firstName + " " + value.lastName;
  }

}
