import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/configuracoes.models';

@Injectable({ providedIn: 'root' })
export class FornecedoresService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = '/api/fornecedores';

  listar(): Observable<readonly Fornecedor[]> {
    return this.http.get<readonly Fornecedor[]>(this.endpoint);
  }
}
