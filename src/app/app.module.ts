import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// modulos da aplicação
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
   declarations: [
      AppComponent,

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      NgbModule,
      ProductsModule,
      HomeModule,
      SharedModule,

   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
