import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'header',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="header">
      <img [src]="logo">
      <div>
        <span (click)="logoutUser()">Logout</span>
      </div>
    </div>
  `
})

export class HeaderComponent {
  public logo = 'assets/img/logo.svg';

  @Output() logout = new EventEmitter<any>();

  constructor() {}

  public logoutUser() {
    this.logout.emit()
  }
}
