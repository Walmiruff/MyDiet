import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { AlimentosComponent } from './alimentos.component';
import { AlimentosRoutingModule } from './alimentos-routing.module';

@NgModule({
  declarations: [AlimentosComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedPipesModule,
    ReactiveFormsModule,
    AlimentosRoutingModule,
  ]
})
export class AlimentosModule { }
