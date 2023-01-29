import { Component, Input } from '@angular/core';
import { ConditionLevel } from '../product-condition/product-condition.component';

export enum Availability {
  Available = 'Disponible',
  Unavailable = 'Agotado',
}

// export type Availability = 'Disponible'|'Agotado';

@Component({
  selector: 'app-product-card-header',
  templateUrl: './product-card-header.component.html',
  styleUrls: ['./product-card-header.component.css']
})
export class ProductCardHeaderComponent {

  @Input() title: string = '';
  @Input() availability: Availability = Availability.Available;
  @Input() conditionLevel: ConditionLevel = ConditionLevel.Good;

  getAvailabilityColor() {
    if (this.availability === Availability.Available) return 'success';
    if (this.availability === Availability.Unavailable) return 'danger';
    return 'info';
  }
}
