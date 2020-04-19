import { Component } from '@angular/core';

import {Product} from '../shared/models/product.model';
import {ProductService} from '../shared/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products = [];

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll()
    .subscribe(products => this.products = products.content);
  }

  delete(id) {
    this.service.delete(id).subscribe(() => this.getAll());
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
