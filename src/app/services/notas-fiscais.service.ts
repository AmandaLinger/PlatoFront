import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProdutoNotaFiscal {
  readonly nome: string;
  readonly quantidade: number;
}

export interface NotaFiscal {
  readonly id: string;
  readonly numero: string;
  readonly emitidaEm: string;
  readonly valorTotal: number;
  readonly produtos: readonly ProdutoNotaFiscal[];
}

@Injectable({ providedIn: 'root' })
export class NotasFiscaisService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = '/api/notas-fiscais';

  listarPorData(data: string): Observable<readonly NotaFiscal[]> {
    const params = new HttpParams().set('data', data);

    return this.http.get<readonly NotaFiscal[]>(this.endpoint, { params });
  }
}
