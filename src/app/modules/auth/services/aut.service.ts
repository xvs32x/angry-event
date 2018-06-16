import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthI } from '../intefaces/auth';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(auth: AuthI): Observable<AuthI> {
    return this.http.post('/api/auth', auth);
  }
}
