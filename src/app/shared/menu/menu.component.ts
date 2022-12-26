import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  activeItem!: MenuItem;  
   
  constructor( ) { 
    
  }


  ngOnInit() {
      this.items = [
        { 
          label: 'Cards',
          icon: 'pi pi-fw pi-file',
          routerLink:'/'
        },
        {
          label: 'TODOS',
          icon: 'pi pi-fw pi-pencil',
          routerLink: 'todos'
        }
      ];

      this.activeItem = this.items[0];
  }
}

   


