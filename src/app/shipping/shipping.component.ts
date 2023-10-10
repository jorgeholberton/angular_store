import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CartService } from "../cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  /* Inyecte el servicio de carrito en el ShippingComponent constructor(). */
  constructor(private cartService: CartService) {}

  /* Defina una shippingCostspropiedad que establezca la shippingCostspropiedad 
  utilizando el getShippingPrices()método del archivo CartService.
  Inicialice la shippingCostspropiedad dentro ngOnInit()del método. */
  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
