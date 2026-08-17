import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FinalizacaoNota,
  FormaPagamento,
  NotaFiscalPendente,
  OperadorCaixa,
} from '../../models/pedido.models';

interface OpcaoPagamento {
  readonly valor: FormaPagamento;
  readonly rotulo: string;
}

@Component({
  selector: 'app-modal-finalizar-nota',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './modal-finalizar-nota.html',
  styleUrl: './modal-finalizar-nota.scss',
})
export class ModalFinalizarNota implements OnChanges {
  @Input() notaFiscal: NotaFiscalPendente | null = null;
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly finalized = new EventEmitter<FinalizacaoNota>();

  readonly operadores: readonly OperadorCaixa[] = [
    { id: 'ana-souza', nome: 'Ana Souza' },
    { id: 'bruno-lima', nome: 'Bruno Lima' },
    { id: 'carla-santos', nome: 'Carla Santos' },
  ];

  readonly formasPagamento: readonly OpcaoPagamento[] = [
    { valor: 'dinheiro', rotulo: 'Dinheiro' },
    { valor: 'credito', rotulo: 'Cartão de crédito' },
    { valor: 'debito', rotulo: 'Cartão de débito' },
    { valor: 'pix', rotulo: 'PIX' },
  ];

  operadorId = '';
  formaPagamento: FormaPagamento | '' = '';

  get canFinalize(): boolean {
    return Boolean(this.notaFiscal && this.operadorId && this.formaPagamento);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['notaFiscal']) {
      this.operadorId = '';
      this.formaPagamento = '';
    }
  }

  finalizeNote(): void {
    if (!this.notaFiscal || !this.operadorId || !this.formaPagamento) {
      return;
    }

    this.finalized.emit({
      notaFiscalId: this.notaFiscal.id,
      operadorId: this.operadorId,
      formaPagamento: this.formaPagamento,
    });
  }
}
