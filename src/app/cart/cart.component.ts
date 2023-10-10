import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
/* En cart.component.ts, importe el CartServicedesde el cart.service.tsarchivo */


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  
})

export class CartComponent 
{
  /* Definir la items propiedad para almacenar los productos en el carrito. */
  items=this.cartService.getItems();

  /* Para recopilar el nombre y la dirección del usuario, utilice el FormBuilder group()método
   para establecer la checkoutFormpropiedad en un modelo de formulario que contenga campos 
   name y address. */
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  /* Inyecte el CartService para que CartComponent pueda usarlo agregándolo al archivo constructor() */
 /* Inyecte el FormBuilderservicio en el CartComponent constructor(). Este servicio es parte del 
 ReactiveFormsModulemódulo que ya has importado. */
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

/* crear un boton en cart.component.html que llame esta función 
desde aqui se llama a clearCart en cart.service.ts*/

limpiar(){
  this.cartService.clearCart();/* servicio creado en el cart.service.ts */
  console.log("limpiar:", this.items);
}

/* Defina un onSubmit()método para procesar el formulario. Este método permite a los usuarios 
enviar su nombre y dirección. */
onSubmit(): void {
  // Process checkout data here
  this.items = this.cartService.clearCart();
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.checkoutForm.reset();
}

}
