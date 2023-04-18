import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEndereco } from '../../models/endereco.model';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private API_URL = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  consultarCep(cep: number): Observable<IEndereco> {
    return this.http.get(
      `${this.API_URL}${cep}/json/`
    ) as Observable<IEndereco>;
  }
}
