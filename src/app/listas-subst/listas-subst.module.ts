import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasSubstRoutingModule } from './listas-subst-routing.module';
import { ListasSubstComponent } from './listas-subst.component';
import { PadraoComponent } from './padrao/padrao.component';
import { OvolactovegComponent } from './ovolactoveg/ovolactoveg.component';


@NgModule({
  declarations: [
    ListasSubstComponent,
    PadraoComponent,
    OvolactovegComponent,
  ],
  imports: [
    CommonModule,
    ListasSubstRoutingModule,
  ]
})
export class ListasSubstModule { }
