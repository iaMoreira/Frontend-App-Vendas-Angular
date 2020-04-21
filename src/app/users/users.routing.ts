import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../core/services/auth-guard.service';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UserListComponent }, // users
      { path: 'store', component: UserStoreComponent }, // users/store
      { path: ':id/edit', component: UserStoreComponent }, // users/:id/edit
      { path: ':id', component: UserComponent }, // users/:id
    ]
  }

];

export const UsersRoutes = RouterModule.forChild(routes);
