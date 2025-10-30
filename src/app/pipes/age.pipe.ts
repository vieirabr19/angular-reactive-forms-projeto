import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'age',
  standalone: false
})
export class AgePipe implements PipeTransform {
  transform(age: number): string {   
    return age ? `${age} anos` : '';
  }
}