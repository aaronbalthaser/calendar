import { Component } from '@angular/core';

console.log('`Login` component loaded');

@Component({
  selector: 'login',
  template: `
    <div>
      Login
      <auth-form></auth-form>
    </div>
  `
})

export class LoginComponent {
  constructor() {}
}
