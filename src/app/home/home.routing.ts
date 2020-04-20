import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { AuthComponent } from './auth/auth.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LadingPageComponent
      },
      {
        path: 'login',
        component: AuthComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'resgister',
        component: AuthComponent
      },
    ]
  }

];

export const HomeRoutes = RouterModule.forChild(routes);
