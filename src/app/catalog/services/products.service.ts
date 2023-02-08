import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../model/product';

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<any>('assets/products.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { 
            const mapped = data.map(product => ({
                ...product,
                discount: this.getDiscount(product),
            }))
            mapped.sort(this.byDiscount());
            mapped.sort(this.byPriority());
            mapped.sort(this.byAvailability());
            return mapped;
        });
    }

    getClothingProducts() {
        return this.http.get<any>('assets/clothingProducts.json')
        .toPromise()
        .then(res => <Product[]>res.data)
        .then(data => { 
            const mapped = data.map(product => ({
                ...product,
                discount: this.getDiscount(product),
            }))
            mapped.sort(this.byDiscount());
            mapped.sort(this.byPriority());
            mapped.sort(this.byAvailability());
            return mapped;
        });
    }

    generateId() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for (var i = 0; i < 9; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        
        return text;
    }

    private byAvailability() {
        return (a, b) => a.inventoryStatus.localeCompare(b.inventoryStatus)*-1;
    }

    private byDiscount() {
        return (a, b) => b.discount - a.discount;
    }

    private byPriority() {
        return (a, b) => b.priority - a.priority;
    };

    private getDiscount(product: Product): number {
        return (product.originalPrice - product.currentPrice) / product.originalPrice;
    }
}