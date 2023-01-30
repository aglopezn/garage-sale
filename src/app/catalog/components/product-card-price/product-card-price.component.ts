import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-price',
  templateUrl: './product-card-price.component.html',
  styleUrls: ['./product-card-price.component.css']
})
export class ProductCardPriceComponent {

  @Input() previousPrice: number | undefined;
  @Input() currentPrice: number | undefined;
  @Input() percentOff: number;
}
