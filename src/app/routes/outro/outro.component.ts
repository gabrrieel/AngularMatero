import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class Boleta {
  id: number;
  bloco: string;
}

export class Operacao {
id: number;
bloco: string;
}


@Component({
  selector: 'app-outro',
  templateUrl: './outro.component.html',
  styleUrls: ['./outro.component.scss']
})
export class OutroComponent implements OnInit {

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
    { id: 1, bloco: 'Bloco 1', valor: 450 },
    { id: 2, bloco: 'Bloco 2', valor: 600 },
    { id: 3, bloco: 'Total VB', valor: 1050 },
    { id: 1, bloco: 'Bloco 1', valor: 600 },
    { id: 2, bloco: 'Bloco 2', valor: 450 },
    { id: 3, bloco: 'Total VB', valor: 1050 },
    { id: 1, bloco: 'Teste 123', valor: 1050 },
    { id: 2, bloco: 'Teste', valor: 500 },
    { id: 3, bloco: 'Teste Bloc', valor: 100 } as Boleta
  ];

  vO = [
    { id: 1, bloco: 'Bloco 1', valor: 450 },
    { id: 2, bloco: 'Bloco 2', valor: 600 },
    { id: 3, bloco: 'Total VB', valor: 1050 },
    { id: 1, bloco: 'Bloco 1', valor: 600 },
    { id: 2, bloco: 'Bloco 2', valor: 450 },
    { id: 3, bloco: 'Total VB', valor: 1050 },
    { id: 1, bloco: 'Teste 123', valor: 1050 },
    { id: 2, bloco: 'Teste', valor: 500 },
    { id: 3, bloco: 'Teste Bloc', valor: 100 } as Operacao
  ];


  ngOnInit() {
  }

  // private buscaDadosBoleta(): void {

  //   this.InicialService.getDadosBoleta(this.formIntegracao.value.data, this.formIntegracao.value.mercado,
  //     '').subscribe((res => {
  //       this.vB = res, this.showp = true, this.show = false;
  //       this.mudaCorVB();
  //     }),
  //       error => {
  //         this.show = true, this.showp = false, this.show = true, this.vB=null;
  //       });
  // }

  // private buscaDadosOperacao(): void {
  //   this.InicialService.getDadosOperacao(this.formIntegracao.value.data, this.formIntegracao.value.mercado,
  //     '').subscribe((res => {
  //       this.vO = res, this.showp = false;
  //       this.mudaCorVO();
  //     }),
  //       error => {
  //         this.show = true, this.showp = false, this.show = true, this.vO=null;
  //       });
  // }

  // private mudaCorVB() {
  //   this.vB.forEach((element, index) => {
  //     if (element.valor > 0) {
  //       this.vB[index].cor = 3
  //     }
  //     if (element.valor >= 1000) {
  //       this.vB[index].cor = 2
  //     }
  //     if (element.valor >= 4000) {
  //       this.vB[index].cor = 1
  //     }
  //   });
  // }

  // private mudaCorVO() {
  //   this.vO.forEach((element, index) => {
  //     if (element.valor > 0) {
  //       this.vO[index].cor = 3
  //     }
  //     if (element.valor >= 1000) {
  //       this.vO[index].cor = 2
  //     }
  //     if (element.valor >= 4000) {
  //       this.vO[index].cor = 1
  //     }
  //   });
  // }

  filtro() {
    console.log(this.formIntegracao.value.data.toLocaleDateString());
    console.log(this.formIntegracao.value.mercado);
    console.log(this.formIntegracao.value.tipoOperacao);

    // this.buscaDadosOperacao();
    // this.buscaDadosBoleta();
  }

}
