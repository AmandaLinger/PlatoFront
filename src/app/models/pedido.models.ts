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

export interface ProdutoNotaFiscal {
  readonly nome: string;
  readonly quantidade: number;
}

export interface NotaFiscalPendente {
  readonly id: string;
  readonly mesa: string;
  readonly produtos: readonly ProdutoNotaFiscal[];
  readonly valorTotal: number;
}

export interface OperadorCaixa {
  readonly id: string;
  readonly nome: string;
}

export type FormaPagamento = 'dinheiro' | 'credito' | 'debito' | 'pix';

export interface FinalizacaoNota {
  readonly notaFiscalId: string;
  readonly operadorId: string;
  readonly formaPagamento: FormaPagamento;
}
