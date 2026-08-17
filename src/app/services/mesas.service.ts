import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumoMesa } from '../models/pedido.models';

@Injectable({ providedIn: 'root' })
export class MesasService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = '/api/mesas';

  buscarConsumo(numeroMesa: number): Observable<ConsumoMesa> {
    return this.http.get<ConsumoMesa>(`${this.endpoint}/${numeroMesa}/consumo`);
  }
}
