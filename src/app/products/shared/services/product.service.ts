import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from '../../shared/models/product.model';
import { BaseService } from '../../../core/services/base.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService<Product>{
  baseUrl = this.baseUrl + '/products';  // Url da api
}
