import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BtnOrange } from '../../components/btn-orange/btn-orange';
import { BtnBack } from '../../components/btn-back/btn-back';
import { ModalConfirmarPedido } from '../../components/modal-confirmar-pedido/modal-confirmar-pedido';
import { ModalDetalheProduto } from '../../components/modal-detalhe-produto/modal-detalhe-produto';
import { ItemPedido, Pedido, Produto, SelecaoProduto } from '../../models/pedido.models';

@Component({
  selector: 'app-fazer-pedido-page',
  imports: [CurrencyPipe, BtnOrange, BtnBack, ModalDetalheProduto, ModalConfirmarPedido],
  templateUrl: './fazer-pedido-page.html',
  styleUrl: './fazer-pedido-page.scss',
})
export class FazerPedidoPage {
  readonly produtos: readonly Produto[] = [
    {
      id: 'pizza-margherita',
      nome: 'Pizza margherita',
      descricao: 'Molho, muçarela e manjericão.',
      imagemUrl: '/pizza.png',
      precoUnitario: 42,
    },
    {
      id: 'pizza-calabresa',
      nome: 'Pizza calabresa',
      descricao: 'Calabresa, cebola e muçarela.',
      imagemUrl: '/pizza.png',
      precoUnitario: 46,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
    {
      id: 'refrigerante',
      nome: 'Refrigerante',
      descricao: 'Lata 350 ml.',
      imagemUrl: '/pizza.png',
      precoUnitario: 7,
    },
  ];

  itens: ItemPedido[] = [];
  produtoSelecionado: Produto | null = null;
  isProductModalOpen = false;
  isConfirmationModalOpen = false;
  pedidoConfirmado: Pedido | null = null;

  get valorTotal(): number {
    return this.itens.reduce((total, item) => total + item.subtotal, 0);
  }

  openProductModal(produto: Produto): void {
    this.produtoSelecionado = produto;
    this.isProductModalOpen = true;
  }

  closeProductModal(): void {
    this.isProductModalOpen = false;
    this.produtoSelecionado = null;
  }

  addItem(selecao: SelecaoProduto): void {
    this.itens = [
      ...this.itens,
      { ...selecao, subtotal: selecao.produto.precoUnitario * selecao.quantidade },
    ];
    this.closeProductModal();
  }

  increaseItemQuantity(index: number): void {
    this.updateItemQuantity(index, this.itens[index].quantidade + 1);
  }

  decreaseItemQuantity(index: number): void {
    this.updateItemQuantity(index, this.itens[index].quantidade - 1);
  }

  removeItem(index: number): void {
    this.itens = this.itens.filter((_, itemIndex) => itemIndex !== index);
  }

  openConfirmationModal(): void {
    if (this.itens.length > 0) {
      this.isConfirmationModalOpen = true;
    }
  }

  closeConfirmationModal(): void {
    this.isConfirmationModalOpen = false;
  }

  confirmOrder(pedido: Pedido): void {
    this.pedidoConfirmado = pedido;
    this.itens = [];
    this.closeConfirmationModal();
  }

  private updateItemQuantity(index: number, quantidade: number): void {
    if (quantidade < 1) {
      this.removeItem(index);
      return;
    }

    this.itens = this.itens.map((item, itemIndex) =>
      itemIndex === index
        ? { ...item, quantidade, subtotal: item.produto.precoUnitario * quantidade }
        : item,
    );
  }
}
