import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Third Party Module Dependencies */
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* Module Dependencies */
import { SharedModule } from './modules/shared';

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyBv57zmII-OJCO3OhRSEGCkJZBjICCFF0M",
  authDomain: "calendara-ad36e.firebaseapp.com",
  databaseURL: "https://calendara-ad36e.firebaseio.com",
  projectId: "calendara-ad36e",
  storageBucket: "calendara-ad36e.appspot.com",
  messagingSenderId: "559843744582"
};

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
      {
        path: 'register',
        loadChildren: './modules/register/register.module#RegisterModule',
        data: { preload: true }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    SharedModule.forRoot()
  ]
})

export class AuthModule {}
