import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppPreloader } from './app.preloader';
import { DataResolver } from './app.resolver';

import { AuthGuard } from './modules/auth/modules/shared/services/guards/auth.guard';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'dashboard',
    canActivate: [ AuthGuard ],
    loadChildren: './modules/dashboard#DashboardModule',
    data: { preload: true }
  }
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
