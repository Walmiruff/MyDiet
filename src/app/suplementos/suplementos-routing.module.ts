import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuplementosComponent } from './suplementos.component';
import { SuplementosDetailsComponent } from './suplementos-details/suplementos-details.component'

const routes: Routes = [
  {
    path: '', component: SuplementosComponent,
    children: [
      { path: 'details/:id', component: SuplementosDetailsComponent }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuplementosRoutingModule { }
