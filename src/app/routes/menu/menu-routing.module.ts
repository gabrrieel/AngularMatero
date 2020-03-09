import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovoComponent } from './novo/novo.component';
import { TataComponent } from './tata/tata.component';
import { ExemploComponent } from './sub/exemplo/exemplo.component';
import { OutroExemploComponent } from './sub/outro-exemplo/outro-exemplo.component';



const routes: Routes = [
  {
    path: 'novo',
    component: NovoComponent,
    data: { title: 'novo', titleI18n: 'novo' },
  },
  {
    path: 'tata',
    component: TataComponent,
    data: { title: 'tata', titleI18n: 'tata' },
  },
  {
    path: 'exemplo',
    component: ExemploComponent,
    data: { title: 'exemplo', titleI18n: 'exemplo' },
  },
  {
    path: 'outroexemplo',
    component: OutroExemploComponent,
    data: { title: 'outroexemplo', titleI18n: 'outroexemplo' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
