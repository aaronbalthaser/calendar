import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Module Dependencies */

/* Containers */

/* Components */
import { Test2Component } from './containers/test2/test2.component';

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: Test2Component }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    Test2Component
  ],
  providers: [],
  exports: []
})

export class Test2Module {}
