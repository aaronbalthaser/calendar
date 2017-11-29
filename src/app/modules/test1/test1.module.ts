import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* Module Dependencies */

/* Containers */

/* Components */
import { Test1Component } from './containers/test1/test1.component';

/* Services */

/* Routes */
export const ROUTES: Routes = [
  { path: '', children: [
    { path: '', component: Test1Component }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [
    Test1Component
  ],
  providers: [],
  exports: []
})

export class Test1Module {}
