import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/modules/shared/services/auth/auth.service';

console.log('`Dashboard` component loaded asynchronously');

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }
  `]
})

export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/auth/login']);
    } catch (error) {}
  }
}
