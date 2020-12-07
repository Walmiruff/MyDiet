import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvaAntropComponent } from './ava-antrop/ava-antrop.component';

import { GastosEnergComponent } from './gastos-energ/gastos-energ.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlanAlimComponent } from './plan-alim/plan-alim.component';

const routes: Routes = [
  {path: 'gastos-energ' , component: GastosEnergComponent},
  {path: 'ava-antrop', component: AvaAntropComponent },
  {path: 'plan-alim', component: PlanAlimComponent },
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'gastos-energ', pathMatch: 'prefix'},
  {path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
