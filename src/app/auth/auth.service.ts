import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authStatusListener = new Subject();
  constructor(private http: HttpClient, private router: Router) {}

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    return this.http
      .post(environment.apiUrl + 'api/user/signup', authData)
      .subscribe(
        () => {
          this.router.navigate['/'];
        },
        (error) => {
          console.log(error);
          this.authStatusListener.next(false);
        }
      );
  }

  login(email: string, password: string) {
    const authData: AuthData = { email: email, password: password };
    this.http.post(environment.apiUrl + 'api/user/login', authData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        this.authStatusListener.next(false);
      }
    );
  }
}
