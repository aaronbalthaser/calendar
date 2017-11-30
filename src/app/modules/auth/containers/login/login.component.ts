import { Component } from '@angular/core';
import { Router } from '@angular/router';

console.log('Auth');

@Component({
  selector: 'login',
  template: `
    <div>Login
      <button (click)="go()">Goooooo</button>
    </div>
  `,
})

export class LoginComponent {
  constructor(private router: Router) {}

  public go() {

  }
}
