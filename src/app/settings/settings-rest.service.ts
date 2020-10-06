import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

class Setting {
}

@Injectable({
  providedIn: 'root'
})
export class SettingsRestService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  post(setting: Setting): Observable<Setting> {
    return this.http.post(this.url + '/setting', setting);
  }
}
