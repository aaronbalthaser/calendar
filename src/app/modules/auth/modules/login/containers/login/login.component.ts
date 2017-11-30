import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

console.log('`Login` component loaded');

@Component({
  selector: 'login',
  template: `
    <div>
      Login
      <auth-form (submitted)="login($event)">
        <h1>Login</h1>
        <a routerLink="/auth/register">Not Registered?</a>
        <button type="submit">
          Login
        </button>
      </auth-form>
    </div>
  `
})

export class LoginComponent {
  constructor() {}

  login(event: FormGroup) {
    console.log(event.value);
  }
}
