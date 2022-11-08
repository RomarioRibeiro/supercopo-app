import { ErroHandlerService } from './core/erro-handler.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MessageService, ConfirmationService } from 'primeng/api';



import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PrimengModule } from './primeng.module';
import { environment } from '../environments/environment';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';





export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    PrimengModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MessagesModule,
    MessageModule,
    RouterModule,
    ConfirmDialogModule,
    ToastModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    ErroHandlerService,
    MessageService,
    ConfirmationService,

    Title,
    DatePipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
