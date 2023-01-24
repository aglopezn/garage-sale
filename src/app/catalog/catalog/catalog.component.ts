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
          {label: 'Precio más bajo primero', value: 'currentPrice'},
          {label: 'Precio más alto primero', value: '!currentPrice'},
          {label: 'Nombre A - Z', value: 'name'},
          {label: 'Nombre Z - A', value: '!name'},
          // {label: 'Categoría A - Z', value: 'category'},
          // {label: 'Categoría Z - A', value: '!category'},
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

  getImageSrc(product: Product)  {
    if (!product.image) return 'assets/images/primeng.svg';
    return `assets/images/product/${product.image}`;
  }
}
