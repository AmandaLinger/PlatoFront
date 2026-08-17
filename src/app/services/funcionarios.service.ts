import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/configuracoes.models';

@Injectable({ providedIn: 'root' })
export class FuncionariosService {
  private readonly http = inject(HttpClient);
  private readonly endpoint = '/api/funcionarios';

  listarAtivos(): Observable<readonly Funcionario[]> {
    const params = new HttpParams().set('ativo', 'true');
    return this.http.get<readonly Funcionario[]>(this.endpoint, { params });
  }
}
