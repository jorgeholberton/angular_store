/* Input permite capturar los datos de entrada que le lleguen
al componente 
Output y EventEmite para poder notificar eventos
*/
import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent 
{
  @Input() product:Product | undefined /* queda vacio con undefine */
  @Output() notify = new EventEmitter();/* habilita emitir eventos, el padre ve al hijo */
  /*el  (click)="notify.emit() que aparece en el product-alerts.component.html*/
}
