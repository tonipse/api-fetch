import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  apiUrl = environment.apiUrl;

  constructor(private _http: HttpClient) {}

  getUsers() {
    return this._http.get<User[]>(this.apiUrl);
  }
}
