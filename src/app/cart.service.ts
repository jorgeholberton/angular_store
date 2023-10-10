import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService 
{
    items: Product[]=[];/* arreglo vacio de tipo Product */
    /* Inyectar HttpClienten el CartService constructor() */
    constructor(private http:HttpClient) { }

    addToCart(product:Product)
    {
      this.items.push(product);
     /*  localStorage.setItem("Carrito",JSON.stringify(this.items)); */
    }

    getItems()
    {
      return this.items
    }
    
    /* servicio, se llama desde cart.component.ts*/
    clearCart(): Product[]
    {
      /* localStorage.clear(); */
      this.items =[];/*borra, devuelve lista vacia */
      console.log("clearCart:", this.items);
      return this.items; 
    }

    /* etShippingPrices()método que utilice el HttpClient get()método. */
    getShippingPrices() {
      return this.http.get<{type: string, price: number}[]>
      ('/assets/shipping.json');
    }
}
