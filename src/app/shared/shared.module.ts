import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from './pipes/pipe.module';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NzMessageModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
    NzMessageModule
  ]
})
export class SharedModule {
}

