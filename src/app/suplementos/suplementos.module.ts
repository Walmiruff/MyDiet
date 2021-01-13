import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuplementosComponent } from './suplementos.component';
import { SuplementosRoutingModule } from './suplementos-routing.module';



@NgModule({
  declarations: [SuplementosComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuplementosRoutingModule,
  ]
})
export class SuplementosModule { }
