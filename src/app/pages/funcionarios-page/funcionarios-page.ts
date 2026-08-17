import { Component } from '@angular/core';
import { BtnBack } from '../../components/btn-back/btn-back';
import { ModalFuncionarioForm } from '../../components/modal-funcionario-form/modal-funcionario-form';
import { Funcionario, FuncionarioCadastro } from '../../models/configuracoes.models';

@Component({ selector: 'app-funcionarios-page', imports: [BtnBack, ModalFuncionarioForm], templateUrl: './funcionarios-page.html', styleUrl: './funcionarios-page.scss' })
export class FuncionariosPage {
  funcionarios: Funcionario[] = [
    { id: 'func-1', nome: 'Ana Souza', telefone: '(11) 99999-0001', cargo: 'Gerente' },
    { id: 'func-2', nome: 'Bruno Lima', telefone: '(11) 99999-0002', cargo: 'Garçom' },
  ];
  isModalOpen = false;

  addFuncionario(funcionario: FuncionarioCadastro): void {
    this.funcionarios = [...this.funcionarios, { ...funcionario, id: `func-${Date.now()}` }];
    this.isModalOpen = false;
  }
}
