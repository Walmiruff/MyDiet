import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: number, unidade: string): string {
      return value < 0 ? '-' : value === null ? '-' : ` ${value.toFixed(2).replace('.', ',')} ${unidade}`;
  }

}
