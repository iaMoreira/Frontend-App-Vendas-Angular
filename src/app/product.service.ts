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
  baseUrl = this.baseUrl + '/produtos';  // Url da api
}
