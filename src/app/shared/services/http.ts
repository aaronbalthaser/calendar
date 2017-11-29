import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Env } from '../../_env';
import { HttpHeaders } from '../../shared/services/http-headers';

@Injectable()
export class HttpService {
  private url = this.env.API_URL;

  constructor(
    private http: Http,
    private httpHeaders: HttpHeaders,
    private env: Env
  ) {}

  public get(endpoint: string, id: number, postfix?: any, auxiliary?: number) {
    let pfx = postfix || '';
    let aux = (typeof auxiliary === 'undefined') ? '' : '/' + auxiliary;

    return this.http.get(this.url + endpoint + id + pfx + aux, {
      headers: this.httpHeaders.getHeaders()
    });
  }

  public put(endpoint: string, id: number, model: any, postfix?: string, auxiliary?: number, token?: any) {
    let body = JSON.stringify(model);
    let pfx = postfix || '';
    let aux = (typeof auxiliary === 'undefined' || auxiliary === null) ?
        '' : '/' + auxiliary;
    let _token = token;

    return this.http.put(this.url + endpoint + id + pfx + aux, body, {
      headers: this.httpHeaders.getHeaders(_token)
    });
  }

  public create(endpoint: string, model: Object, id?: number, postfix?: string) {
    let body = JSON.stringify(model);
    let _id = id || '';
    let pfx = postfix || '';

    return this.http.post(this.url + endpoint + _id + pfx, body, {
      headers: this.httpHeaders.getHeaders()
    });
  }

  public delete(endpoint: string, id: string, postfix?: string, subjectId?: string) {
    let pfx = postfix || '';
    let _subjectId = subjectId || '';

    return this.http.delete(this.url + endpoint + id + pfx  + '/' + _subjectId,  {
      headers: this.httpHeaders.getHeaders()
    });
  }

  public search(endpoint: string, model: Object) {
    return this.http.post(this.url + endpoint, model, {
      headers: this.httpHeaders.getHeaders()
    });
  }

  public getByEndpoint(endpoint: string) {
    return this.http.get(this.url + endpoint, {
      headers: this.httpHeaders.getHeaders()
    });
  }
}
