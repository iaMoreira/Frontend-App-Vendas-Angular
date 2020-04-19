import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren : './home/home.module#HomeModule'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsModule'
  },

];

@NgModule({
   imports: [
      RouterModule.forRoot(routes,  {
        // preload all modules; optionally we could
        // implement a custom preloading strategy for just some
        // of the modules (PRs welcome 😉)
        preloadingStrategy: PreloadAllModules
      })
   ],
   exports: [
      RouterModule
   ],
   declarations: []
})
export class AppRoutingModule { }
