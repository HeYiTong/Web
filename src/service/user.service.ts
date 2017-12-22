import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../domain/user';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin':'http://127.0.0.1:8080',
      'Access-Control-Allow-Methods':'GET, POST'
    }),
    withCredentials: true
  };

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}

    validateLogin(id: string, password: string): Observable<any> {
        const userinfo = new HttpParams().set('email', id).set('password', password);
        return this.http.post('http://localhost:8080/login',userinfo,httpOptions);
    }



}
