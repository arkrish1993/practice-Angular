import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  webApiKey: string = 'AIzaSyAnaLK-P7elPjCJMTP7iqWgjYV7RU8doMg';

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.webApiKey}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          let errorMessage = 'An unknown error occurred!';
          if (error.error && error.error.error) {
            switch (error.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already!';
            }
          }
          return throwError(errorMessage);
        })
      );
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.webApiKey}`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((error) => {
          let errorMessage = 'An unknown error occurred!';
          return throwError(errorMessage);
        })
      );
  }
}
