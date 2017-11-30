import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFormComponent } from './components/auth-form/auth-form.component';

import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthFormComponent
  ],
  exports: [
    AuthFormComponent
  ]
})

export class SharedModule {
  /*
    When a feature NgModule exports components and directives that require
    sharing the same custom provider instances, consider registering these
    providers in the root NgModule with a forRoot() method. This can help
    ensure that all child NgModules have access to the same provider instances
    without requiring the consumer to handle the provider registration explicitly.

    This shared module contains providers to be shared with all the modules inside
    the auth module.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService
      ]
    };
  }
}
