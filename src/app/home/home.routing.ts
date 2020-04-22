import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LadingPageComponent } from './lading-page/lading-page.component';
import { AuthComponent } from './auth/auth.component';
import { NoAuthGuard } from '../core/services/no-auth-guard.service';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../core/services/auth-guard.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

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
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
        canActivate: [NoAuthGuard]
      }

    ]
  }

];

export const HomeRoutes = RouterModule.forChild(routes);
