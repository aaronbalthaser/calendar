import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth/auth.service';

console.log('`Register` component loaded');

@Component({
  selector: 'register',
  template: `
    <div>
      <auth-form (submitted)="register($event)">
        <h1>Login</h1>
        <a routerLink="/auth/login">Already have an account?</a>
        <button type="submit">
          Create account
        </button>
        <div class="error" *ngIf="error">
          {{ error }}
        </div>
      </auth-form>
    </div>
  `
})

export class RegisterComponent {
  public error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async register(event: FormGroup) {
    const { email, password } = event.value;

    try {
      await this.authService.createUser(email, password);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.error = error.message;
    }
  }
}