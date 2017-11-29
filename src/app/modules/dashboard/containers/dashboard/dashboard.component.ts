import { Component } from '@angular/core';

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

}
