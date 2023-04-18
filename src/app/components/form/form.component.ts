import { Component, OnInit } from '@angular/core';
import { IEndereco } from '../../models/endereco.model';
import { CepService } from '../../service/cepService/cep.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  dadosApi: IEndereco;
  localStorageData: IEndereco;
  hint: boolean = false;

  constructor(private service: CepService) {
    let empty = {
      cep: '',
      bairro: '',
      complemento: '',
      ddd: '',
      gia: '',
      ibge: '',
      localidade: '',
      logradouro: '',
      siafi: '',
      uf: '',
    };
    this.localStorageData = empty;
    this.dadosApi = empty;
  }

  ngOnInit(): void {
    this.service.consultarCep(30160907).subscribe((resp) => {
      this.dadosApi = resp;
    });
    this.loadLocalStorage();
  }

  loadLocalStorage(): void {
    this.localStorageData.cep = localStorage.getItem('cep');
    this.localStorageData.logradouro = localStorage.getItem('logradouro');
    this.localStorageData.complemento = localStorage.getItem('complemento');
    this.localStorageData.bairro = localStorage.getItem('bairro');
    this.localStorageData.ddd = localStorage.getItem('ddd');
    this.localStorageData.gia = localStorage.getItem('gia');
    this.localStorageData.ibge = localStorage.getItem('ibge');
    this.localStorageData.localidade = localStorage.getItem('localidade');
    this.localStorageData.siafi = localStorage.getItem('siafi');
    this.localStorageData.uf = localStorage.getItem('uf');
  }

  salvarLocalStorage(): void {
    console.log('salvando dados no localstorage');
    localStorage.setItem('cep', this.dadosApi.cep);
    localStorage.setItem('logradouro', this.dadosApi.logradouro);
    localStorage.setItem('complemento', this.dadosApi.complemento);
    localStorage.setItem('bairro', this.dadosApi.bairro);
    localStorage.setItem('ddd', this.dadosApi.ddd);
    localStorage.setItem('gia', this.dadosApi.gia);
    localStorage.setItem('ibge', this.dadosApi.ibge);
    localStorage.setItem('localidade', this.dadosApi.localidade);
    localStorage.setItem('siafi', this.dadosApi.siafi);
    localStorage.setItem('uf', this.dadosApi.uf);

    this.loadLocalStorage();
  }

  checkCep(event): void {
    if (event.length == 8) {
      this.service.consultarCep(event).subscribe((resp) => {
        this.dadosApi = resp;
      });
    }
  }

  focus() {
    this.hint = !this.hint;
  }
}
