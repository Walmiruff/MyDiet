import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimOrSecOpPipe } from './prim-or-sec-op.pipe';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [
    PrimOrSecOpPipe,
    ReplacePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimOrSecOpPipe,
    ReplacePipe
  ]
})
export class SharedPipesModule { }
