import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeModule } from '../prime/prime.module';
import { ProductCardActionComponent } from './components/product-card-action/product-card-action.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductCardHeaderComponent } from './components/product-card-header/product-card-header.component';
import { ProductCardPriceComponent } from './components/product-card-price/product-card-price.component';
import { ProductConditionComponent } from './components/product-condition/product-condition.component';
import { ProductModalComponent } from './components/product-modal/product-modal.component';
import { ProductService } from './services/products.service';


@NgModule({
  declarations: [
    CatalogComponent,
    ProductCardComponent,
    ProductCardHeaderComponent,
    ProductCardPriceComponent,
    ProductCardActionComponent,
    ProductConditionComponent,
    ProductModalComponent,
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
