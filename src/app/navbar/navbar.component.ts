import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  items: MenuItem[] = [];

  constructor() {}
  
  ngOnInit(): void {
    this.items = [
      {label: 'Productos', icon: 'pi pi-tags', routerLink: '/catalog'},
      {label: 'Ropa', icon: 'pi pi-shopping-bag', routerLink: '/catalog/clothing'},
  ];
  }


}
