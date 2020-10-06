import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService implements IRestService {
  private configUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  GetService(id: number): Observable<Service> {
    return undefined;
  }

  GetServices(): Observable<Service[]> {
    return this.http.get(this.configUrl + '/services') as Observable<Service[]>;
  }

  GetUser(id: number): Observable<User> {
    return undefined;
  }

  GetUsers(): Observable<User[]> {
    return this.http.get(this.configUrl + '/users') as Observable<User[]>;
  }

  PostUser(user: User): Observable<User> {
    return this.http.post(this.configUrl + '/users', user) as Observable<User>;
  }

}

export class User {
  id: number;
  name: string;
  enabledServices: number[];
  serviceEnabledDates: number[];
}

export interface IRestService {
  GetService(id: number): Observable<Service>;
  GetServices(): Observable<Service[]>;
  GetUser(id: number): Observable<User>;
  GetUsers(): Observable<User[]>;
}

export class Service {
  id: number;
  title: string;
  fee: number;
}
