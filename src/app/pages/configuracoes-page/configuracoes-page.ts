import { Component } from '@angular/core';
import { ItemHome } from '../../components/item-home/item-home';
import {BtnBack} from '../../components/btn-back/btn-back';

@Component({
  selector: 'app-configuracoes-page',
  imports: [ItemHome, BtnBack],
  templateUrl: './configuracoes-page.html',
  styleUrl: './configuracoes-page.scss',
})
export class ConfiguracoesPage {}
