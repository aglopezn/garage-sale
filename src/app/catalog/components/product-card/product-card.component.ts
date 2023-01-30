import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() style: { [klass: string]: any; };
  @Input() disabled: boolean = false;

  containerClass() {
    return {
      'product-card': true,
      'disabled': this.disabled,
    }
  }
}
