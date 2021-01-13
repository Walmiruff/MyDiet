import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FitoterapicosRoutingModule } from './fitoterapicos-routing.module';
import { FitoterapicosComponent } from './fitoterapicos.component';
import { FitoterapicosDetailsComponent } from './fitoterapicos-details/fitoterapicos-details.component';



@NgModule({
  declarations: [FitoterapicosComponent, FitoterapicosDetailsComponent],
  imports: [
    CommonModule,
    FitoterapicosRoutingModule
  ]
})
export class FitoterapicosModule { }
