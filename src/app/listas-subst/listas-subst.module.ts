import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasSubstRoutingModule } from './listas-subst-routing.module';
import { ListasSubstComponent } from './listas-subst.component';
import { DiabeticosComponent } from './diabeticos/diabeticos.component';
import { HipertensosComponent } from './hipertensos/hipertensos.component';
import { OvolactovegComponent } from './ovolactoveg/ovolactoveg.component';
import { PadraoComponent } from './padrao/padrao.component';

@NgModule({
  declarations: [
    ListasSubstComponent,
    DiabeticosComponent,
    HipertensosComponent,
    OvolactovegComponent,
    PadraoComponent
  ],
  imports: [
    CommonModule,
    ListasSubstRoutingModule,
  ]
})
export class ListasSubstModule { }
