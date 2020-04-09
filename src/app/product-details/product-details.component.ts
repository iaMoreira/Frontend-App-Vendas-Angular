import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
      this.id = params.get('productId');
    });
    // const id = this.route.paramMap.get('id');
    this.service.getOne(this.id)
      .subscribe(product => this.product = product);
  }
}
