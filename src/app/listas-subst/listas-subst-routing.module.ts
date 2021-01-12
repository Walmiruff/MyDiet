import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListasSubstComponent } from './listas-subst.component';
import { DiabeticosComponent } from './diabeticos/diabeticos.component';
import { HipertensosComponent } from './hipertensos/hipertensos.component';


const routes: Routes = [
  {
    path: '', component: ListasSubstComponent,
    children: [
      { path: 'diabeticos', component: DiabeticosComponent },
      { path: 'hipertensos', component: HipertensosComponent },
      { path: '', redirectTo: 'diabeticos', pathMatch: 'prefix'},
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasSubstRoutingModule { }
