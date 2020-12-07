import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosEnergComponent } from './gastos-energ/gastos-energ.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AvaAntropComponent } from './ava-antrop/ava-antrop.component';
import { PlanAlimComponent } from './plan-alim/plan-alim.component';
import { RoundPipe } from './shared/pipes/round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GastosEnergComponent,
    NotFoundComponent,
    AvaAntropComponent,
    PlanAlimComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
