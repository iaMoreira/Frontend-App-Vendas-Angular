import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
})
export class ProductStoreComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  product: Product =  {} as Product ;
  id: number;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private service: ProductService,
    ) {
      this.form = this.formBuilder.group({
        name: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required]
      });
     }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.service.getOne(this.id)
        .subscribe(product => {
          this.product = product;
          this.form.patchValue(this.product);

        });
    }
  }

  submit() {

    Object.assign(this.product, this.form.value);
    if(this.id){
      this.service.update(this.id, this.product).subscribe(
        data => {
            this.router.navigate(['/products']);
        },
        error => {
            this.loading = false;
        });
    }else{

      this.service.save(this.product)
      .subscribe(
        data => {
          this.router.navigate(['/products']);
        },
        error => {
          this.loading = false;
        });
    }
  }

}
