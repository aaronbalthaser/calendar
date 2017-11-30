import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularclass/hmr';

import { ENV_PROVIDERS } from './environment';
import { AppRoutingModule } from './app.routes';

/* Store & Reducers */
import { StoreModule } from '@ngrx/store';
import { testReducer } from './store/reducers/test.reducer';

/* Modules */
import { AuthModule } from './modules/auth';

/* Components */
import { AppComponent } from './app.component';

/* Services */

import '../styles/styles.scss';
import '../styles/headings.css';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.forRoot({
      post: testReducer
    }),

    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ENV_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
