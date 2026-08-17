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
