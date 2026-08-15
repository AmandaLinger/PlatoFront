import { Routes } from '@angular/router';
import { InitialPage } from './pages/initial-page/initial-page';
import { LoginPage } from './pages/login-page/login-page';
import {HomePage} from './pages/home-page/home-page';
import {PerfilPage} from './pages/perfil-page/perfil-page';
import {CardapioEditPage} from './pages/cardapio-edit-page/cardapio-edit-page';
import {ConfiguracoesPage} from './pages/configuracoes-page/configuracoes-page';

export const routes: Routes = [
  { path: '', component: InitialPage },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'perfil', component: PerfilPage },
  { path: 'cardapioEdit', component: CardapioEditPage},
  { path: 'configuracoes', component: ConfiguracoesPage },
  { path: '**', redirectTo: '' }
];
