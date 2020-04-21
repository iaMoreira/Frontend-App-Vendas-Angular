import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { AuthComponent } from './auth/auth.component';
import { NoAuthGuard } from '../core/services/no-auth-guard.service';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../core/services/auth-guard.service';

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
        component: AuthComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'settings',
        component: SettingsComponent,
        canActivate: [AuthGuard]
      }
    ]
  }

];

export const HomeRoutes = RouterModule.forChild(routes);
