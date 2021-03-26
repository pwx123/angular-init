import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
