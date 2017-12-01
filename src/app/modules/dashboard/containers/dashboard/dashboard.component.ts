import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

import { MonthsComponent } from '../../../calendar/container/months/months.component';

import { AuthService } from '../../../auth/modules/shared/services/auth/auth.service';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="wrapper">
      <header (logout)="onLogout()"></header>
      <div #entry id="dashboard-content"></div>
      <footer></footer>
    </div>
  `
})

export class DashboardComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private authService: AuthService,
    private router: Router,

    private resolver: ComponentFactoryResolver
  ) {}

  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/auth/login']);
    } catch (error) {}
  }

  public ngAfterContentInit() {
    const monthsFactory = this.resolver.resolveComponentFactory(MonthsComponent);
    const component = this.entry.createComponent(monthsFactory);
  }
}
