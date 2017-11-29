import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as Actions from './store/actions/test.actions';

interface AppState {
  test: any;
}

@Component({
  selector: 'calendara',
  encapsulation: ViewEncapsulation.None,
  template: `
    <main>
      <div>
        <input [(ngModel)]="text">
        <button (click)="editText()">Change Title</button>
        <a routerLink="/dashboard">Dashboard</a>
      </div>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  public text: string;
  private testStore$: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.testStore$ = this.store.select('test');
    console.log(this.testStore$);
  }

  public editText() {
    this.store.dispatch(new Actions.EditText(this.text));
  }
}
