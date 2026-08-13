import { Routes } from '@angular/router';
import { InitialPage } from './pages/initial-page/initial-page';
import { LoginPage } from './pages/login-page/login-page';
import {HomePage} from './pages/home-page/home-page';

export const routes: Routes = [
  { path: '', component: InitialPage },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: '**', redirectTo: '' }
];
