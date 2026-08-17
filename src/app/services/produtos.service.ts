import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto, ProdutoPayload } from '../models/pedido.models';

@Injectable({ providedIn: 'root' })
export class ProdutosService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = '/api/produtos';

  listar(): Observable<readonly Produto[]> {
    return this.http.get<readonly Produto[]>(this.endpoint);
  }

  criar(produto: ProdutoPayload): Observable<Produto> {
    return this.http.post<Produto>(this.endpoint, produto);
  }

  atualizar(id: string, produto: ProdutoPayload): Observable<Produto> {
    return this.http.put<Produto>(`${this.endpoint}/${id}`, produto);
  }

  excluir(id: string): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
