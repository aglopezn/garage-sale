import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { PrimeModule } from '../prime/prime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './catalog/products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    FormsModule,
    HttpClientModule,
    PrimeModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [
    ProductService,
  ]
})
export class CatalogModule { }
