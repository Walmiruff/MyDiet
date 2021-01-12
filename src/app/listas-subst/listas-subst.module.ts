import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasSubstRoutingModule } from './listas-subst-routing.module';
import { ListasSubstComponent } from './listas-subst.component';


@NgModule({
  declarations: [
    ListasSubstComponent,
  ],
  imports: [
    CommonModule,
    ListasSubstRoutingModule,
  ]
})
export class ListasSubstModule { }
