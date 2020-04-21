import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { BaseService } from './base.service';


@Injectable()
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor (
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService
  ) {
  }

  // Verify JWT in localstorage with server & load user's info.
  // This runs once on application startup.
  public populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.getToken()) {
      console.log("user-auth")
      this.apiService.get('/users/user-auth')
      .subscribe(
        data => this.setAuth(data),
        err => this.purgeAuth()
      );
    } else {
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  private setAuth(user: User) {
    // Save JWT sent from server in localstorage
    this.jwtService.saveToken(user.access_token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  public purgeAuth() {
    // Remove JWT from localstorage
    this.jwtService.destroyToken();
    // Set current user to an empty object
    this.currentUserSubject.next({} as User);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  public attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, credentials)
      .pipe(map(
      user => {
        this.setAuth(user);
        return user;
      }
    ));
  }

  public getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  public changePassword(credencials) {
    return this.apiService.patch('/users/change-password'
      , credencials).pipe();
  }
}
