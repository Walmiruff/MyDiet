import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuplementosComponent } from './suplementos.component';
import { SuplementosRoutingModule } from './suplementos-routing.module';



@NgModule({
  declarations: [SuplementosComponent],
  imports: [
    CommonModule,
    SuplementosRoutingModule,
  ]
})
export class SuplementosModule { }
