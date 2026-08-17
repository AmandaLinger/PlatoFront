export interface Funcionario {
  readonly id: string;
  readonly nome: string;
  readonly telefone: string;
  readonly cargo: string;
}

export type FuncionarioCadastro = Omit<Funcionario, 'id'>;

export interface Fornecedor {
  readonly id: string;
  readonly nome: string;
  readonly telefone: string;
  readonly cnpj: string;
}

export type FornecedorCadastro = Omit<Fornecedor, 'id'>;

export interface NotaFornecedor {
  readonly id: string;
  readonly fornecedorId: string;
  readonly fornecedorNome: string;
  readonly dataEmissao: string;
  readonly numeroNota: string;
  readonly valorTotal: number | null;
  readonly chaveAcesso: string;
  readonly observacoes: string;
}

export type NotaFornecedorCadastro = Omit<NotaFornecedor, 'id' | 'fornecedorNome'>;
