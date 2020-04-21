import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../core/services/auth-guard.service';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UsersListComponent }, // /users
      // { path: 'store', component: ProductStoreComponent }, // users/store
      // { path: ':id/edit', component: ProductStoreComponent }, //
      // { path: ':id', component: ProductComponent },
    ]
  }

];

export const UsersRoutes = RouterModule.forChild(routes);
