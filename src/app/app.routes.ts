import { Routes } from '@angular/router';
import { InitialPage } from './pages/initial-page/initial-page';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
  { path: '', component: InitialPage },
  { path: 'login', component: LoginPage },
  { path: '**', redirectTo: '' }
];
