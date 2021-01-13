import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentosComponent } from './alimentos.component';

import { AlimentosRoutingModule } from './alimentos-routing.module';

@NgModule({
  declarations: [AlimentosComponent],
  imports: [
    CommonModule,
    AlimentosRoutingModule
  ]
})
export class AlimentosModule { }
