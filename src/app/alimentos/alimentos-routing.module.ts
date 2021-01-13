import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosComponent } from './alimentos.component';

const routes: Routes = [
  {
    path: '', component: AlimentosComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentosRoutingModule { }
