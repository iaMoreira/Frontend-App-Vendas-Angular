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
      { path: '', component: ProductListComponent },
      { path: 'store', component: ProductStoreComponent },
      { path: ':id/update', component: ProductStoreComponent },
      { path: ':id', component: ProductComponent },
    ]
  }

];

export const ProductsRoutes = RouterModule.forChild(routes);
