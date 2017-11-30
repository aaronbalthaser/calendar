import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

console.log('`Register` component loaded');

@Component({
  selector: 'register',
  template: `
    <div>
      Register
      <auth-form (submitted)="register($event)">
        <h1>Login</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">
          Create account
        </button>
      </auth-form>
    </div>
  `
})

export class RegisterComponent {
  constructor() {}

  register(event: FormGroup) {
    console.log(event.value);
  }
}
