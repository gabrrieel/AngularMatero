
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InicioService {

  boleta = [
    {
      title: 'Total Visão Boleta',
      amount: 180.20,
      opcao: 'descrição 1',
      progress: {
        value: 50,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Bloco 3',
      amount: 70.20,
      opcao: 'descrição 2',
      progress: {
        value: 70,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Bloco 2',
      amount: 1292.92,
      opcao: 'descrição 3',
      progress: {
        value: 100,
      },
      color: 'bg-green-500',
    },
    {
      title: 'Bloco 1',
      amount: 19.22,
      opcao: 'descrição 4',
      progress: {
        value: 40,
      },
      color: 'bg-teal-500',
    },
    {
      title: 'Total Sales',
      amount: 180.20,
      opcao: 'descrição 5',
      progress: {
        value: 50,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Bloco 3',
      amount: 702.20,
      opcao: 'descrição 6',
      progress: {
        value: 70,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Bloco 2',
      amount: 1291.92,
      opcao: 'descrição 7',
      progress: {
        value: 95,
      },
      color: 'bg-green-500',
    },
    {
      title: 'Bloco 1',
      amount: 19.22,
      opcao: 'descrição 8',
      progress: {
        value: 40,
      },
      color: 'bg-teal-500',
    },
  ];

  operacao = [
    {
      title: 'Total Visão Operação',
      amount: 180.200,
      opcao: 'descrição 1',
      progress: {
        value: 50,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Bloco 3',
      amount: 70.205,
      opcao: 'descrição 2',
      progress: {
        value: 70,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Bloco 2',
      amount: 1291.922,
      opcao: 'descrição 3',
      progress: {
        value: 80,
      },
      color: 'bg-green-500',
    },
    {
      title: 'Bloco 1',
      amount: 19.22,
      opcao: 'descrição 4',
      progress: {
        value: 40,
      },
      color: 'bg-teal-500',
    },
    {
      title: 'Total Sales',
      amount: 180.200,
      opcao: 'descrição 5',
      progress: {
        value: 50,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Bloco 3',
      amount: 70.205,
      opcao: 'descrição 6',
      progress: {
        value: 70,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Bloco 2',
      amount: 1291.92,
      opcao: 'descrição 7',
      progress: {
        value: 80,
      },
      color: 'bg-green-500',
    },
    {
      title: 'Bloco 1',
      amount: 1.922,
      opcao: 'descrição 8',
      progress: {
        value: 40,
      },
      color: 'bg-teal-500',
    },
  ];

  total = [
    {
      title: 'Total Resultados',
      amount: 180.20,
      opcao: 'descrição Total',
      progress: {
        value: 50,
      },
      color: 'bg-indigo-500',
    },
    {
      title: 'Total Visão Operação',
      amount: 70.20,
      opcao: 'descrição Total Operação',
      progress: {
        value: 70,
      },
      color: 'bg-blue-500',
    },
    {
      title: 'Total Visão Boleta',
      amount: 1291.922,
      opcao: 'descrição Total Boleta',
      progress: {
        value: 99,
      },
      color: 'bg-green-500',
    },
    {
      title: 'Total teste',
      amount: 1291.922,
      opcao: 'descrição Total Teste',
      progress: {
        value: 99,
      },
      color: 'bg-teal-500',
    }
  ];

  descBoleta = [
    {
      descSimples: 'Aqui vai uma descrição simples sobre visão boleta',
      descCompleta: 'Aqui vai uma descrição completa sobre a visão boleta',
    }
  ];

  descOperacao = [
    {
      descSimples: 'Aqui vai uma descrição simples sobre visão boleta',
      descCompleta: 'Aqui vai uma descrição completa sobre a visão boleta'
    }
  ];

  descTotal = [
    {
      descSimples: 'Aqui vai uma descrição simples sobre visão boleta',
      descCompleta: 'Aqui vai uma descrição completa sobre a visão boleta'
    }
  ];

  constructor(private http: HttpClient) { }

  getBoleta() {
    return this.boleta;
  }

  getOperacao() {
    return this.operacao;
  }

  getTotal() {
    return this.total;
  }

  getDescBoleta() {
    return this.descBoleta;
  }

  getDescOperacao() {
    return this.descOperacao;
  }

  getDescTotal() {
    return this.descTotal;
  }

}
