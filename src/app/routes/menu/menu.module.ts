import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { NovoComponent } from './novo/novo.component';
import { TataComponent } from './tata/tata.component';
import { ExemploComponent } from './sub/exemplo/exemplo.component';
import { OutroExemploComponent } from './sub/outro-exemplo/outro-exemplo.component';
import { MenuRoutingModule } from './menu-routing.module';




const COMPONENTS = [NovoComponent, TataComponent, ExemploComponent, OutroExemploComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, MenuRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class MenuModule {}
