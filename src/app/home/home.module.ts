import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutes } from './home.routing';
import { AuthComponent } from './auth/auth.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    HomeComponent,
    LadingPageComponent,
    AuthComponent,
  ],
  providers: [
    NoAuthGuard
  ]
})
export class HomeModule { }
