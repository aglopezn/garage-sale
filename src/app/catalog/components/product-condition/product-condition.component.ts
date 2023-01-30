import { Component, Input } from '@angular/core';

export enum ConditionLevel {
  Good = '1',
  Regular = '2',
  Bad = '3',
}

const conditionLabelMapping = {
  [ConditionLevel.Good]    : 'Estado: Bueno',
  [ConditionLevel.Regular] : 'Estado: Desgastado',
  [ConditionLevel.Bad]     : 'Estado: Malo',
}

@Component({
  selector: 'app-product-condition',
  templateUrl: './product-condition.component.html',
  styleUrls: ['./product-condition.component.css']
})
export class ProductConditionComponent {

  @Input() condition: ConditionLevel;
  readonly ConditionLevel = ConditionLevel;

  getConditionLabel() {
    return conditionLabelMapping[this.condition];
  }
}
