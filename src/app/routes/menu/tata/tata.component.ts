import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { getLocaleDateFormat } from '@angular/common';
import { format } from 'url';
import { MAT_DATE_LOCALE, DateAdapter } from '@angular/material';

export interface Boleta {
  id: number;
  bloco: string;
  cor: string;
}

export interface Operacao {
id: number;
bloco: string;
cor: string;
}



@Component({
  selector: 'app-tata',
  templateUrl: './tata.component.html',
  styleUrls: ['./tata.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ]
})

export class TataComponent implements OnInit {

  error = 'Não existem dados cadastrados';
  show = false;
  showp = true;
  formIntegracao: FormGroup;

  data = this._adapter.setLocale('br');
  constructor(private _adapter: DateAdapter<any>) {

    this.formIntegracao = new FormGroup({
      data: new FormControl(new Date(), Validators.required),
      mercado: new FormControl('Itaú', Validators.required),
      tipoOperacao: new FormControl('todas')
    });
  }


  vB = [
    { id: 1, bloco: 'Bloco 1', valor: 450 , cor: 'bg-indigo-500'},
    { id: 2, bloco: 'Bloco 2', valor: 600 , cor: 'bg-blue-500' },
    { id: 3, bloco: 'Total VB', valor: 1050 , cor: 'bg-green-500'},
    { id: 1, bloco: 'Bloco 1', valor: 600 , cor: 'bg-teal-500' },
    { id: 1, bloco: 'Bloco 1', valor: 450 , cor: 'bg-indigo-500'},
    { id: 2, bloco: 'Bloco 2', valor: 600 , cor: 'bg-blue-500' },
    { id: 3, bloco: 'Total VB', valor: 1050 , cor: 'bg-green-500'},
    { id: 1, bloco: 'Bloco 1', valor: 600 , cor: 'bg-teal-500' } as Boleta
  ];

  vO = [
    { id: 1, bloco: 'Bloco 1', valor: 450 , cor: 'bg-indigo-500'},
    { id: 2, bloco: 'Bloco 2', valor: 600 , cor: 'bg-blue-500' },
    { id: 3, bloco: 'Total VB', valor: 1050 , cor: 'bg-green-500'},
    { id: 1, bloco: 'Bloco 1', valor: 600 , cor: 'bg-teal-500' },
    { id: 1, bloco: 'Bloco 1', valor: 450 , cor: 'bg-indigo-500'},
    { id: 2, bloco: 'Bloco 2', valor: 600 , cor: 'bg-blue-500' },
    { id: 3, bloco: 'Total VB', valor: 1050 , cor: 'bg-green-500'},
    { id: 1, bloco: 'Bloco 1', valor: 600 , cor: 'bg-teal-500' } as Operacao
  ];


  ngOnInit() {
    this.filtro();
  }

  filtro() {
    console.log(this.formIntegracao.value.data.toLocaleDateString());
    console.log(this.formIntegracao.value.mercado);
    console.log(this.formIntegracao.value.tipoOperacao);

  }

}
