import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  product;
  id;
  products = [];

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    // const id = this.route.paramMap.get('id');
    this.service.getOne(this.id)
      .subscribe(product => this.product = product);
  }
}
