import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace2'
})
export class ReplacePipe2 implements PipeTransform {

  transform(value: number, unidade: string): string {
      return value < 0 ? '-' : value === null ? '-' : value === undefined ? '-' : ` ${value.toFixed(2).replace('.', ',')} ${unidade}`;
  }

}
