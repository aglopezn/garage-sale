import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent {

  @Input() breakpoints: { [klass: string]: any; };
  @Input() style: { [klass: string]: any; };
  @Input() product: Product;
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  productImagePrefix = 'assets/images/product/compressed';

  constructor() {}

  onVisibleChange(newVisible) {
    this.visible = newVisible;
    this.visibleChange.emit(newVisible);
  }

  getContactLink(product: Product) {
    const message = `Hola. Me interesa el producto ${product?.name} que tienes en venta.`
    const encoded = encodeURIComponent(message);
    return `https://wa.me/573195485338?text=${encoded}`;
  }

  getImageSrc(product: Product)  {
    if (!product?.image) return 'assets/images/primeng.svg';
    return `${this.productImagePrefix}/${product?.image}`;
  }  

  getImagesToDisplay(product: Product): string[] {
    if(!product?.galleriaImages || product.galleriaImages.length === 0) 
      return [this.getImageSrc(product)];
    return product.galleriaImages.map(img => `${this.productImagePrefix}/${img}`)
  }
}
