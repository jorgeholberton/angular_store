import { Component } from '@angular/core';
import {  products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = [...products];
   
  share(nombre: string) {
    window.alert('El producto ' + nombre + ' se ha compartido');
  }

  /* onNotify() se llamara desde product-list.component.html */
   onNotify() {
    window.alert('Se notificará cuando el producto salga a la venta');
  }
 
}
  
  







