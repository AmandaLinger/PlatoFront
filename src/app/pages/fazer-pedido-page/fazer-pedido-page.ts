import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnOrange } from '../../components/btn-orange/btn-orange';
import {BtnBack} from '../../components/btn-back/btn-back';

interface Produto {
  readonly nome: string;
  readonly descricao: string;
  readonly preco: string;
}

@Component({
  selector: 'app-fazer-pedido-page',
  imports: [RouterLink, BtnOrange, BtnBack],
  templateUrl: './fazer-pedido-page.html',
  styleUrl: './fazer-pedido-page.scss',
})
export class FazerPedidoPage {
  readonly produtos: Produto[] = [
    { nome: 'Pizza margherita', descricao: 'Molho, muçarela e manjericão.', preco: 'R$ 42,00' },
    { nome: 'Pizza calabresa', descricao: 'Calabresa, cebola e muçarela.', preco: 'R$ 46,00' },
    { nome: 'Refrigerante', descricao: 'Lata 350 ml.', preco: 'R$ 7,00' },
  ];
}
