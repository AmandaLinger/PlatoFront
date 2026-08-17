import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnOrange } from '../../components/btn-orange/btn-orange';
import {BtnBack} from '../../components/btn-back/btn-back';

interface PedidoAberto {
  readonly mesa: string;
  readonly itens: number;
  readonly total: string;
}

@Component({
  selector: 'app-finalizar-pedido-page',
  imports: [RouterLink, BtnOrange, BtnBack],
  templateUrl: './finalizar-pedido-page.html',
  styleUrl: './finalizar-pedido-page.scss',
})
export class FinalizarPedidoPage {
  readonly pedidos: readonly PedidoAberto[] = [
    { mesa: 'Mesa 02', itens: 3, total: 'R$ 95,00' },
    { mesa: 'Mesa 07', itens: 2, total: 'R$ 61,00' },
    { mesa: 'Mesa 11', itens: 4, total: 'R$ 128,00' },
  ];
}
