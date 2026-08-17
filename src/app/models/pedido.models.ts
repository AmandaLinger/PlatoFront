export interface Produto {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly imagemUrl: string;
  readonly precoUnitario: number;
}

export interface SelecaoProduto {
  readonly produto: Produto;
  readonly quantidade: number;
  readonly observacoes: string;
}

export interface ItemPedido extends SelecaoProduto {
  readonly subtotal: number;
}

export interface Pedido {
  readonly mesa: string;
  readonly garcom: string;
  readonly itens: readonly ItemPedido[];
  readonly valorTotal: number;
}
