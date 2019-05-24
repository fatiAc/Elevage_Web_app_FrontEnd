import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class HttpMethodsService {

  constructor(public http: HttpClient) { }

  get(url: string, data) {
    return this.http.get(url + '' + data);
  }

  myHttpHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return httpOptions;
  }


  post(url: string, data) {
    return this.http.post(url, data, this.myHttpHeaders());
  }

  put(url: string) {
    return this.http.put(url, this.myHttpHeaders());
  }

  delete(url: string) {
    return this.http.delete(url, this.myHttpHeaders());
  }
}
