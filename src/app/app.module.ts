import { AppRoutingModule } from './app-routing.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LancamentoPesquisarComponent } from './lancamentos/lancamento-pesquisar/lancamento-pesquisar.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { PrimengModule } from './primeng.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    PrimengModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    PrimengModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
