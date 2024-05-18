import { HttpClient } from '@angular/common/http';
import { ENV_DEV } from './../../../../../../src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

const API_KEY = ENV_DEV.API_KEY;

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers = () => {
    return this.http.get<User[]>(`${API_KEY}`);
  }

  getUserById = (id: string) => {
    return this.http.get<User>(`${API_KEY}/${id}`);
  }
}
