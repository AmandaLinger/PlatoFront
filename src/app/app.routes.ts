import { Routes } from '@angular/router';
import { InitialPage } from './pages/initial-page/initial-page';
import { LoginPage } from './pages/login-page/login-page';
import {HomePage} from './pages/home-page/home-page';
import {PerfilPage} from './pages/perfil-page/perfil-page';
import {CardapioEditPage} from './pages/cardapio-edit-page/cardapio-edit-page';
import {ConfiguracoesPage} from './pages/configuracoes-page/configuracoes-page';
import { FazerPedidoPage } from './pages/fazer-pedido-page/fazer-pedido-page';
import { FinalizarPedidoPage } from './pages/finalizar-pedido-page/finalizar-pedido-page';
import { ConsultarMesasPage } from './pages/consultar-mesas-page/consultar-mesas-page';
import { NotasDoDiaPage } from './pages/notas-do-dia-page/notas-do-dia-page';

export const routes: Routes = [
  { path: '', component: InitialPage },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'perfil', component: PerfilPage },
  { path: 'cardapioEdit', component: CardapioEditPage},
  { path: 'configuracoes', component: ConfiguracoesPage },
  { path: 'fazer-pedido', component: FazerPedidoPage },
  { path: 'finalizar-pedido', component: FinalizarPedidoPage },
  { path: 'consultar-mesas', component: ConsultarMesasPage },
  { path: 'notas-do-dia', component: NotasDoDiaPage },
  { path: '**', redirectTo: '' }
];
