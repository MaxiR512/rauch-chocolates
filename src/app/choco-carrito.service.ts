import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chocolate } from './choco-list/Choco';

@Injectable({
  providedIn: 'root'
})
export class ChocoCarritoService {
  
  private  _listaChocolates: Chocolate[] = [];
  listaChocolates: BehaviorSubject<Chocolate[]> = new BehaviorSubject<Chocolate[]>([]);
  
  constructor() { }
  
  agregarCarrito(choco:Chocolate){
    
    let item: Chocolate|undefined = this._listaChocolates.find((v1) => v1.nombre == choco.nombre);
    if(!item){
      this._listaChocolates.push({...choco});
    }else{
      item.cantidad += choco.cantidad;
    }
    console.log(this._listaChocolates);
    this.listaChocolates.next(this._listaChocolates);

  }

  actualizarCarrito() {
    this.listaChocolates.next(this._listaChocolates);
  }
  quitarChocolate(chocolate: Chocolate): void {
    let index = this._listaChocolates.findIndex((item) => item.nombre === chocolate.nombre);

    if (index !== -1) {
      this._listaChocolates[index].cantidad--;

      if (this._listaChocolates[index].cantidad === 0) {
        this._listaChocolates.splice(index, 1);
      }

      this.listaChocolates.next(this._listaChocolates);
    }
  }

}
