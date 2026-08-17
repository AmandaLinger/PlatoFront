import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BtnBack } from '../../components/btn-back/btn-back';
import { BtnOrange } from '../../components/btn-orange/btn-orange';
import { ModalFinalizarNota } from '../../components/modal-finalizar-nota/modal-finalizar-nota';
import { FinalizacaoNota, NotaFiscalPendente } from '../../models/pedido.models';

@Component({
  selector: 'app-finalizar-pedido-page',
  imports: [CurrencyPipe, BtnBack, BtnOrange, ModalFinalizarNota],
  templateUrl: './finalizar-pedido-page.html',
  styleUrl: './finalizar-pedido-page.scss',
})
export class FinalizarPedidoPage {
  notasFiscais: NotaFiscalPendente[] = [
    {
      id: 'nf-002',
      mesa: 'Mesa 02',
      produtos: [
        { nome: 'Pizza margherita', quantidade: 1 },
        { nome: 'Refrigerante', quantidade: 2 },
      ],
      valorTotal: 95,
    },
    {
      id: 'nf-007',
      mesa: 'Mesa 07',
      produtos: [
        { nome: 'Pizza calabresa', quantidade: 1 },
        { nome: 'Refrigerante', quantidade: 2 },
      ],
      valorTotal: 61,
    },
    {
      id: 'nf-011',
      mesa: 'Mesa 11',
      produtos: [
        { nome: 'Pizza margherita', quantidade: 2 },
        { nome: 'Refrigerante', quantidade: 1 },
      ],
      valorTotal: 128,
    },
  ];

  notaSelecionada: NotaFiscalPendente | null = null;
  notaFinalizada: NotaFiscalPendente | null = null;

  openFinalizeModal(notaFiscal: NotaFiscalPendente): void {
    this.notaSelecionada = notaFiscal;
  }

  closeFinalizeModal(): void {
    this.notaSelecionada = null;
  }

  finalizeNote(finalizacao: FinalizacaoNota): void {
    const notaFiscal = this.notasFiscais.find((nota) => nota.id === finalizacao.notaFiscalId) ?? null;

    if (!notaFiscal) {
      return;
    }

    this.notaFinalizada = notaFiscal;
    this.notasFiscais = this.notasFiscais.filter((nota) => nota.id !== finalizacao.notaFiscalId);
    this.closeFinalizeModal();
  }
}
