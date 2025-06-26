import { Injectable } from '@angular/core';
import { Chocolate } from './choco-list/Choco';

@Injectable({
  providedIn: 'root'
})
export class ChocoCarritoService {
  constructor() { }
  
  listaChocolates: Chocolate[] = [];
  agregarCarrito(choco:Chocolate){
    this.listaChocolates.push(choco);
    console.log("Chocolate agregado al carrito:", choco.cantidad);

  }

}
