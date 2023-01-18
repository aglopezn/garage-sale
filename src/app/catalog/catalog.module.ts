import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    PrimeModule,
  ],
  exports: []
})
export class CatalogModule { }
