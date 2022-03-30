import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { RegisterRequest } from '../types/register-request';
import { CurrentUser } from 'src/app/shared/types/current-user';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../types/auth-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = `${environment.apiUrl}/users`;
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user));
  }
}
