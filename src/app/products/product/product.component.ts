import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService,
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    // const id = this.route.paramMap.get('id');
    this.service.getOne(this.id)
      .subscribe(product => this.product = product);
  }
}
