import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {
  protected baseUrl = API_URL;  // URL to web api

  constructor(  protected api: HttpClient,  ) { }

  protected httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Authorization': 'my-auth-token'
    })
  };

  public getAll (): any {
    return this.api.get(this.baseUrl)
      .pipe(
        tap(_ => this.log('fetched Products')),
        catchError(this.handleError<T[]>('getAll', []))
      );
  }

  public getOne(id: number): Observable<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.api.get<T>(url).pipe(
      tap(_ => this.log(`fetched Product id=${id}`)),
      catchError(this.handleError<T>(`getOne id=${id}`))
    );
  }

  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public log(message: string) {
    console.log(`Service: ${message}`);
  }
}

