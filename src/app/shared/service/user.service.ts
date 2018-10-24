import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../model/user.type'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  query(): Observable<Array<User>> {
    return this.httpClient.get<Array<User>>('http://localhost:8000/user');
  }

  get(id: any): Observable<User> {
    return this.httpClient.get<User>('http://localhost:8000/user/' + id);
  }

  modify(model: User): Observable<User> {
    return this.httpClient.put<User>('http://localhost:8000/user/' + model.id, model)
  }
}
