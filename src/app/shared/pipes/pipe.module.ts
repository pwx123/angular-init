import { NgModule } from '@angular/core';
import { NullValueShowPipe } from './null-value-show.pipe';

@NgModule({
    imports: [
    ],
    declarations: [
        NullValueShowPipe
    ],
    exports: [
        NullValueShowPipe
    ]
})
export class PipeModule { }