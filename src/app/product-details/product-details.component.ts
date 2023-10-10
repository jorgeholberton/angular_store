import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import {ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit 
{
  product: Product | undefined
  
  constructor
  (
    /* inyección dependencia */
    /* inyección servicio */
    private route: ActivatedRoute,
    private cartService: CartService 
    ){}

  ngOnInit(){
    const routerParams= this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routerParams.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute)
  }
  
  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Producto añadido correctamente'+product.name);
  }
}
