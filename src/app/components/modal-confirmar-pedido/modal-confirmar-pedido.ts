import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemPedido, Pedido } from '../../models/pedido.models';

@Component({
  selector: 'app-modal-confirmar-pedido',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './modal-confirmar-pedido.html',
  styleUrl: './modal-confirmar-pedido.scss',
})
export class ModalConfirmarPedido implements OnChanges {
  @Input() itens: readonly ItemPedido[] = [];
  @Input() valorTotal = 0;
  @Output() readonly closed = new EventEmitter<void>();
  @Output() readonly confirmed = new EventEmitter<Pedido>();

  mesa = '';
  garcom = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['itens']) {
      this.mesa = '';
      this.garcom = '';
    }
  }

  confirmOrder(): void {
    const mesa = this.mesa.trim();
    const garcom = this.garcom.trim();

    if (!mesa || !garcom || this.itens.length === 0) {
      return;
    }

    this.confirmed.emit({ mesa, garcom, itens: this.itens, valorTotal: this.valorTotal });
  }
}
