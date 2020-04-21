import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './users-list/users-list.component';

import { UsersRoutes } from './users.routing';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes
  ],
  declarations: [
    UsersComponent,
    UsersListComponent
  ]
})
export class UsersModule { }
