import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../_models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  apiUrl = environment.apiTaskUrl;

  constructor(private _http: HttpClient) {}

  getTasks() {
    return this._http.get<Task[]>(this.apiUrl);
  }
}
