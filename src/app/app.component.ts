import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AuthService, User } from './modules/auth/modules/shared/services/auth/auth.service';
import { Store } from 'store';

@Component({
  selector: 'calendara',
  encapsulation: ViewEncapsulation.None,
  template: `
    <main>
      <h1>{{ user$ | async | json }}</h1>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  private user$: Observable<User>;
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private store: Store
  ) {}

  ngOnInit() {
    this.subscription = this.authService.auth$.subscribe();
    this.user$ = this.store.select('user');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
