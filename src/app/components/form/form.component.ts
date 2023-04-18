import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../../service/formService/formService.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  dadosApi;

  constructor(private service: FormServiceService) {}

  ngOnInit(): void {
    this.service.consultarCep(30160907).subscribe((resp) => {
      this.dadosApi = resp;
      console.log(this.dadosApi);
    });
  }
}
