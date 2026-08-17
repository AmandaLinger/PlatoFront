export interface Produto {
  readonly id: string;
  readonly nome: string;
  readonly descricao: string;
  readonly imagemUrl: string;
  readonly precoUnitario: number;
}

export interface ProdutoPayload {
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
  readonly garcomId?: string;
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

export type StatusMesa = 'Livre' | 'Ocupada' | 'Aguardando conta';

export interface Mesa {
  readonly numero: number;
  readonly status: StatusMesa;
  readonly pedidoId?: string;
}

export interface ItemConsumoMesa {
  readonly id: string;
  readonly produtoNome: string;
  readonly quantidade: number;
  readonly observacoes: string;
  readonly precoUnitario: number;
  readonly subtotal: number;
}

export interface ConsumoMesa {
  readonly mesaNumero: number;
  readonly pedidoId: string;
  readonly abertoEm: string;
  readonly itens: readonly ItemConsumoMesa[];
  readonly valorTotal: number;
}
