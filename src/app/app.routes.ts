import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPreloader } from './app.preloader';
import { DataResolver } from './app.resolver';

import { LoginComponent } from './modules/login/containers/login/login.component';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  { path: 'test1', loadChildren: './modules/test1#Test1Module'},
  { path: 'test2', loadChildren: './modules/test2#Test2Module', data: { preload: true }},
  { path: 'dashboard', loadChildren: './modules/dashboard#DashboardModule', data: { preload: true }}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { preloadingStrategy: AppPreloader })],
  exports: [
    RouterModule
  ],
  providers: [
    AppPreloader
  ]
})

export class AppRoutingModule {}
