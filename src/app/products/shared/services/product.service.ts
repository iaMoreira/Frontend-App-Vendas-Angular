import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../../shared/models/product.model';
import { ApiService } from '../../../core/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<Product>{
  baseUrl = this.baseUrl + '/produtos';  // Url da api
}
