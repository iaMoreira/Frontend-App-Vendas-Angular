import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';


import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductsRoutes } from './products.routing';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    ProductStoreComponent
  ],
  providers: [

  ]
})
export class ProductsModule { }
