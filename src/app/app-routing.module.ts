import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsComponent } from './prometeus-p/pages/cards/cards.component';
import { TodosComponent } from './prometeus-p/pages/todos/todos.component';


const routes: Routes =[
    {
        path:'cards',
        component: CardsComponent,
        pathMatch: 'full'
    },
    {
        path:'todos',
        component: TodosComponent
    },
    {
        path:'**',
        redirectTo:'cards'
        
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}