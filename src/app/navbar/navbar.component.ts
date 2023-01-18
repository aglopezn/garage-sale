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
      {label: 'Catálogo', icon: 'pi pi-tags'},
      // {label: 'Delete', icon: 'pi pi-times'},
      // {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      // {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  }


}
