import { Component } from '@angular/core';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './products.service';

const INVENTORY_STATUS = {
  available: {
    code: 'Disponible',
    class: 'instock'
  },
  unavailable: {
    code: 'Agotado',
    class: 'outofstock'
  },
}
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

  constructor(private productService: ProductService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
      this.productService.getProducts().then(data => this.products = data);

      this.sortOptions = [
          {label: 'Price High to Low', value: '!price'},
          {label: 'Price Low to High', value: 'price'}
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

  getStockStatus(inventoryStatus) {
    if (inventoryStatus === INVENTORY_STATUS.available.code) return INVENTORY_STATUS.available.class;
    return INVENTORY_STATUS.unavailable.class;
  }

  getContactLink(product: Product) {
    const message = `Hola. Me interesa el producto ${product.name} que tienes en venta.`
    const encoded = encodeURIComponent(message);
    return `https://wa.me/573195485338?text=${encoded}`;
  }
}
