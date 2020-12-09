import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosEnergComponent } from './gastos-energ/gastos-energ.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AvaAntropComponent } from './ava-antrop/ava-antrop.component';
import { PlanAlimComponent } from './plan-alim/plan-alim.component';
import { RoundPipe } from './shared/pipes/round.pipe';
import { PrimOrSecOpPipe } from './shared/pipes/prim-or-sec-op.pipe';
import { ReplacePipe } from './shared/pipes/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GastosEnergComponent,
    NotFoundComponent,
    AvaAntropComponent,
    PlanAlimComponent,
    RoundPipe,
    PrimOrSecOpPipe,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
