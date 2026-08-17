import {Component} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {BtnBack} from '../../components/btn-back/btn-back';

type StatusMesa = 'Livre' | 'Ocupada' | 'Aguardando conta';

interface Mesa {
  readonly numero: number;
  readonly status: StatusMesa;
}

@Component({
  selector: 'app-consultar-mesas-page',
  imports: [DecimalPipe, BtnBack],
  templateUrl: './consultar-mesas-page.html',
  styleUrl: './consultar-mesas-page.scss',
})
export class ConsultarMesasPage {
  readonly mesas: readonly Mesa[] = [
    { numero: 1, status: 'Livre' },
    { numero: 2, status: 'Ocupada' },
    { numero: 3, status: 'Aguardando conta' },
    { numero: 4, status: 'Livre' },
    { numero: 5, status: 'Ocupada' },
    { numero: 6, status: 'Livre' },
  ];
}
