import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
