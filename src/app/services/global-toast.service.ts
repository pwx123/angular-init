import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class GlobalToastService {
  constructor(public message: NzMessageService) { }

  Info(msg) {
    this.message.info(msg, { nzDuration: 7000 });
  }

  Warn(msg) {
    this.message.warning(msg, { nzDuration: 3000 });
  }

  Success(msg) {
    this.message.success(msg, { nzDuration: 3000 });
  }

  Error(rt: any) {
    this.message.error(rt.errmsg || rt.error || rt, { nzDuration: 10000 });
  }
}
