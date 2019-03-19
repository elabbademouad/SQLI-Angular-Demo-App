import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../Model/user';

@Pipe({
  name: 'example'
})
export class ExamplePipe implements PipeTransform {

  transform(value: User): any {
    return value.firstName + " " + value.lastName;
  }

}
