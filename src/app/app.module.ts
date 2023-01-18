import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PrimeModule } from './prime/prime.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CatalogModule,
    PrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
