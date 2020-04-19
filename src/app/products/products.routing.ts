import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductsComponent } from './products.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent }, //products
      { path: 'store', component: ProductStoreComponent }, // products/store
      { path: ':id/edit', component: ProductStoreComponent }, //
      { path: ':id', component: ProductComponent },
    ]
  }

];

export const ProductsRoutes = RouterModule.forChild(routes);
