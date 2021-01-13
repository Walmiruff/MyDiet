import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlimentosComponent } from './alimentos.component';
import { AlimentosRoutingModule } from './alimentos-routing.module';
import { ReplacePipe2 } from '../shared/pipes/replace.pipe2';

@NgModule({
  declarations: [AlimentosComponent, ReplacePipe2],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AlimentosRoutingModule,
  ]
})
export class AlimentosModule { }
