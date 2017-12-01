import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../auth/modules/shared/services/auth/auth.service';

console.log('`Dashboard` component loaded asynchronously');

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="wrapper">
      <header (logout)="onLogout()"></header>
      <div id="dashboard-content">

      </div>
      <footer></footer>
    </div>
  `
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
