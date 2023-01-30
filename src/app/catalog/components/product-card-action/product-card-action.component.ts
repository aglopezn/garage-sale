import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card-action',
  templateUrl: './product-card-action.component.html',
  styleUrls: ['./product-card-action.component.css']
})
export class ProductCardActionComponent {

  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() href: string = '';

}
