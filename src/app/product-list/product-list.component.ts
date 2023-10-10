import { Component } from '@angular/core';
import {  products } from '../products';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = [...products];
   
  constructor(private router: Router) {
    // ...
  }
  share(nombre: string) {
    window.alert('El producto ' + nombre + ' se ha compartido');
  }

  /* onNotify() se llamara desde product-list.component.html */
  onNotify() {
    window.alert('Se notificará cuando el producto salga a la venta');
  }

  showDetails(product: any) {
    // Implementa la lógica para mostrar los detalles del producto aquí.
    // Puedes utilizar un modal o una página de detalles.
    // Por ejemplo, puedes navegar a la página de detalles del producto.
         
    this.router.navigate(['/product', product.id]);
  }
}

  
  







