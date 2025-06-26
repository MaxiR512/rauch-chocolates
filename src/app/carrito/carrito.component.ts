import { Component } from '@angular/core';
import { ChocoCarritoService } from '../choco-carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent  {
  
  constructor(private carrito: ChocoCarritoService){
  }
  
  
}
