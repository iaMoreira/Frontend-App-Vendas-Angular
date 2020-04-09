import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';
import { ApiService } from './api.service';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<Product>{
  baseUrl = this.baseUrl + '/produtos';  // URL to web api

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     // 'Authorization': 'my-auth-token'
  //   })
  // };

  // constructor() { }

  // getProducts (): any {
  //   return this.http.get(this.url)
  //     .pipe(
  //       tap(_ => this.log('fetched Products')),
  //       catchError(this.handleError<Product[]>('getProducts', []))
  //     );
  // }

  // /** GET hero by id. Will 404 if id not found */
  // getProduct(id: number): Observable<Product> {
  //   const url = `${this.url}/${id}`;
  //   return this.http.get<Product>(url).pipe(
  //     tap(_ => this.log(`fetched Product id=${id}`)),
  //     catchError(this.handleError<Product>(`getProduct id=${id}`))
  //   );
  // }

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  // private log(message: string) {
  //   console.log(`HeroService: ${message}`);
  // }
}
