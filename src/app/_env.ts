import { Injectable } from '@angular/core';

@Injectable()
export class Env {
  public API_URL: String;

  constructor() {
    let environment: string;
    environment = window.location.hostname;

    switch (environment) {
      case'localhost':
        this.API_URL = 'http://localhost:3002/';
        break;
      default:
        console.log('error');
    }

    console.log('running environment ' + this.API_URL);
  }
}
