import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEndereco } from '../../models/endereco.model';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor(private http: HttpClient) {}

  consultarCep(cep: number): Observable<IEndereco> {
    return this.http.get(
      `https://viacep.com.br/ws/${cep}/json/`
    ) as Observable<IEndereco>;
  }
}
