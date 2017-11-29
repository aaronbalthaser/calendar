import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Module Dependencies */

/* Containers */

/* Components */
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';

/* Services */

/* Routes */
export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [],
  exports: []
})

export class AuthModule {}
