import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule,
      ProductsModule,
      HomeModule,

   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
