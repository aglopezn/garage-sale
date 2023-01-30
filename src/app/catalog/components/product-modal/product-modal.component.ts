import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Product } from '../../catalog/product';

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

  constructor(
    private renderer: Renderer2, 
    private el: ElementRef,
  ) {}

  @HostListener('mousemove', ['$event'])
  onMouseMoveImg(event: any) {
    if(!event.target.classList.contains('product-modal-image')) return; 
    this.renderer.setStyle(this.el.nativeElement.querySelector('.product-modal-image'), 'transform-origin', `${event.offsetX - 50}px ${event.offsetY - 50}px`)
  }

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
    return `assets/images/product/compressed/${product?.image}`;
  }  
}
