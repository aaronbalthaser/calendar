import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { ENV_PROVIDERS } from './environment';
import { AppRoutingModule } from './app.routes';

/* Modules */
import { AuthModule } from './modules/auth';
import { CalendarModule } from './modules/calendar';

/* Components */
import { AppComponent } from './app.component';

/* Services */
import { TransmitService } from './shared/services/transmit';
import { UtilsService } from './shared/services/utils';

/* Store */
import { Store } from './store';

import '../styles/styles.scss';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ENV_PROVIDERS,

    Store,
    TransmitService,
    UtilsService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
