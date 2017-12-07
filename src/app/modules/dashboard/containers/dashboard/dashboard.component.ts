import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MonthsComponent } from '../../../calendar/container/months/months.component';

import { AuthService } from '../../../auth/modules/shared/services/auth/auth.service';
import { TransmitService } from '../../../../shared/services/transmit';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <div class="wrapper">
      <header (logout)="onLogout()"></header>
      <div>
        <button (click)="onPrev()">Prev</button>
        <button (click)="onNext()">Next</button>
      </div>
      <div #entry></div>
      <footer></footer>
    </div>
  `
})

export class DashboardComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private authService: AuthService,
    private transmit: TransmitService,
    private router: Router,
    private resolver: ComponentFactoryResolver
  ) {}

  public onPrev() {
    this.transmit.prev.next();
  }

  public onNext() {
    this.transmit.next.next();
  }

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
