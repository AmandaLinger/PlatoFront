import { DecimalPipe } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { BtnBack } from '../../components/btn-back/btn-back';
import { ModalDetalhesMesa } from '../../components/modal-detalhes-mesa/modal-detalhes-mesa';
import { ConsumoMesa, Mesa, StatusMesa } from '../../models/pedido.models';
import { MesasService } from '../../services/mesas.service';

@Component({
  selector: 'app-consultar-mesas-page',
  imports: [DecimalPipe, BtnBack, ModalDetalhesMesa],
  templateUrl: './consultar-mesas-page.html',
  styleUrl: './consultar-mesas-page.scss',
})
export class ConsultarMesasPage implements OnDestroy {
  private readonly mesasService = inject(MesasService);
  private readonly router = inject(Router);
  private requestVersion = 0;

  readonly mesas: readonly Mesa[] = [];

  mesaSelecionada: Mesa | null = null;
  consumo: ConsumoMesa | null = null;
  isModalOpen = false;
  isLoading = false;
  errorMessage = '';

  ngOnDestroy(): void {
    this.requestVersion += 1;
  }

  selectMesa(mesa: Mesa): void {
    if (mesa.status !== ('Ocupada' satisfies StatusMesa)) {
      return;
    }

    const requestId = ++this.requestVersion;
    this.mesaSelecionada = mesa;
    this.consumo = null;
    this.errorMessage = '';
    this.isLoading = true;
    this.isModalOpen = true;

    this.mesasService
      .buscarConsumo(mesa.numero)
      .pipe(finalize(() => {
        if (requestId === this.requestVersion) {
          this.isLoading = false;
        }
      }))
      .subscribe({
        next: (consumo) => {
          if (requestId === this.requestVersion) {
            this.consumo = consumo;
          }
        },
        error: () => {
          if (requestId === this.requestVersion) {
            this.errorMessage = 'Não foi possível carregar o consumo desta mesa.';
          }
        },
      });
  }

  closeModal(): void {
    this.requestVersion += 1;
    this.isModalOpen = false;
    this.mesaSelecionada = null;
    this.consumo = null;
    this.isLoading = false;
  }

  addMoreItems(): void {
    this.closeModal();
    void this.router.navigate(['/fazer-pedido']);
  }
}
