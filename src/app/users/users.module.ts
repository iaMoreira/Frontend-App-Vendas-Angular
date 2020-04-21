import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersRoutes } from './users.routing';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserStoreComponent,
    UserComponent,
  ]
})
export class UsersModule { }
