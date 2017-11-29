/**
 * HTTP Headers Service:
 * This service serves as an http interceptor for all http calls. It
 * sends the authorization headers with the attached auth token to be
 * decoded on the backend to authenticate the call is authorized.
 */
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

import { AuthToken } from '../../modules/auth/auth-token.service';

@Injectable()
export class HttpHeaders {

  constructor(private authToken: AuthToken) {}

  getHeaders(token?: any) {
    let _token = (token) ? token : this.authToken.getToken();

    return new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + _token
    });
  }
}
