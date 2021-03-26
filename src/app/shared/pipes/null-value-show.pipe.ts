import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullValueShow'
})
// 空值显示为 --
export class NullValueShowPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value ? value : '--';
  }
}
