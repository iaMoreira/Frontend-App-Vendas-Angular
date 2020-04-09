import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseEntity } from './base-entity';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService<T extends BaseEntity> {
  protected baseUrl = API_URL;  // Essa Url tem que ser reinstanciada

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
      tap(_ => this.log(`fetched Enity id=${id}`)),
      catchError(this.handleError<T>(`getOne id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  search(term: string): Observable<T[]> {
    if (!term.trim()) {
      // if not search term, return empty T array.
      return of([]);
    }
    return this.api.get<T[]>(`${this.baseUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
          this.log(`found heroes matching "${term}"`) :
          this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<T[]>('searchHeroes', []))
    );
  }

   //////// Save methods //////////

  /** POST: add a new entity to the server */
  addHero (entity: T): Observable<T> {
    return this.api.post<T>(this.baseUrl, entity, this.httpOptions).pipe(
      tap((newEntity: T) => this.log(`added entity w/ id=${newEntity.id}`)),
      catchError(this.handleError<T>('addHero'))
    );
  }

  /** DELETE: delete the entity from the server */
  deleteHero (entity: T | number): Observable<T> {
    const id = typeof entity === 'number' ? entity : entity.id;
    const url = `${this.baseUrl}/${id}`;

    return this.api.delete<T>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted entity id=${id}`)),
      catchError(this.handleError<T>('deleteHero'))
    );
  }

  /** PUT: update the entity on the server */
  updateHero (entity: T): Observable<any> {
    return this.api.put(this.baseUrl, entity, this.httpOptions).pipe(
      tap(_ => this.log(`updated entity id=${entity.id}`)),
      catchError(this.handleError<any>('updateHero'))
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

