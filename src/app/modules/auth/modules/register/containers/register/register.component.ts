import { Component } from '@angular/core';

console.log('`Register` component loaded');

@Component({
  selector: 'register',
  template: `
    <div>
      Register
      <auth-form></auth-form>
    </div>
  `
})

export class RegisterComponent {
  constructor() {}
}
