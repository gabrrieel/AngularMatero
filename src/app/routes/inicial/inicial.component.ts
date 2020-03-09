import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { DateAdapter } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InicioService } from './inicial.srevice';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [InicioService],
})

export class InicialComponent implements OnInit {

  operacao = this.dashboardSrv.getOperacao();
  boleta = this.dashboardSrv.getBoleta();
  total = this.dashboardSrv.getTotal();
  descBoleta = this.dashboardSrv.getDescBoleta();
  descOperacao = this.dashboardSrv.getDescOperacao();
  descTotal = this.dashboardSrv.getDescTotal();

  data = this._adapter.setLocale('br');

  formIntegracao: FormGroup;

  constructor(private _adapter: DateAdapter<any>, private dashboardSrv: InicioService) {

  this.formIntegracao = new FormGroup({
    data: new FormControl(new Date(), Validators.required),
    mercado: new FormControl('itau', Validators.required),
    tipoOperacao: new FormControl('todas', Validators.required)
  });

  }

  filtro() {
    console.log(this.formIntegracao.value.data.toLocaleDateString());
    console.log(this.formIntegracao.value.mercado);
    console.log(this.formIntegracao.value.tipoOperacao);
  }

  ngOnInit() {}

}
