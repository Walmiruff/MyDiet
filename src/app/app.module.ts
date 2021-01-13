import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosEnergComponent } from './gastos-energ/gastos-energ.component';
import { AvaAntropComponent } from './ava-antrop/ava-antrop.component';
import { PlanAlimComponent } from './plan-alim/plan-alim.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    GastosEnergComponent,
    AvaAntropComponent,
    PlanAlimComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgSelectModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    SharedPipesModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
