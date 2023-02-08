import { Component } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from '../../model/product';
import { ConditionLevel, INVENTORY_STATUS } from '../../services/constants';
import { ProductService } from '../../services/products.service';
import { Utils } from '../../services/utils';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  products: Product[];

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  sortKey: any;

  productSelected: Product;

  showModal: boolean = false;

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.productService.getProducts()
        .then(data => this.products = data);

      this.sortOptions = [
          {label: 'Precio más bajo primero', value: 'currentPrice'},
          {label: 'Precio más alto primero', value: '!currentPrice'},
          {label: 'Nombre A - Z', value: 'name'},
          {label: 'Nombre Z - A', value: '!name'},
      ];

      this.primengConfig.ripple = true;
  }

  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  onOpenProductModal(product) {
    this.productSelected = product;
    this.showModal = true;
  }

  getStockStatus(inventoryStatus) {
    if (inventoryStatus === INVENTORY_STATUS.available.code) return INVENTORY_STATUS.available.class;
    return INVENTORY_STATUS.unavailable.class;
  }

  getContactLink(product: Product) {
    return Utils.getContactLink(product);
  }

  getImageSrc(product: Product)  {
    return Utils.getImageSrc(product.image);
  }

  getCondition(product: Product) {
    if (product.rating === 3) return ConditionLevel.Good;
    if (product.rating === 2) return ConditionLevel.Regular;
    if (product.rating === 1) return ConditionLevel.Bad;
    return ConditionLevel.Good;
  }
}
