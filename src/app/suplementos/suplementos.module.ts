import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SuplementosRoutingModule } from './suplementos-routing.module';
import { SuplementosComponent } from './suplementos.component';
import { SuplementosDetailsComponent } from '../suplementos/suplementos-details/suplementos-details.component';



@NgModule({
  declarations: [
    SuplementosComponent,
    SuplementosDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SuplementosRoutingModule,
  ]
})
export class SuplementosModule { }
