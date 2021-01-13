import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitoterapicosComponent } from './fitoterapicos.component';
import { FitoterapicosDetailsComponent } from './fitoterapicos-details/fitoterapicos-details.component';

const routes: Routes = [
  {
    path: '', component: FitoterapicosComponent,
    children: [
      { path: 'details/:id', component: FitoterapicosDetailsComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FitoterapicosRoutingModule { }
