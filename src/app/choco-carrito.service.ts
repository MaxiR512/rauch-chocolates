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

}
