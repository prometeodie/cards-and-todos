import { NgModule } from '@angular/core';

import {PanelModule} from 'primeng/panel';
import {TabMenuModule} from 'primeng/tabmenu';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  exports:[
    PanelModule,
    TabMenuModule,
    CardModule,
    FieldsetModule
  ]
})
export class PrimeNgModule { }
