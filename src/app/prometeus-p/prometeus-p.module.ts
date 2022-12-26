import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//componentes propios
import { CardsComponent } from './pages/cards/cards.component';
import { TodosComponent } from './pages/todos/todos.component';
import { PrometeusPComponent } from './prometeus-p.component';
import { PrimeNgModule } from '../prime-ng.module';



@NgModule({
  declarations: [
    PrometeusPComponent,
    CardsComponent,
    TodosComponent
  ],
  exports:[
     PrometeusPComponent,
     CardsComponent,
     TodosComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class PrometeusPModule { }
