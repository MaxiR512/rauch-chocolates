import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChocoCarritoService } from '../choco-carrito.service';
import { Chocolate } from '../choco-list/Choco';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
  
  listaChocolates$: Observable<Chocolate[]>;
  constructor(private carrito: ChocoCarritoService){
    this.listaChocolates$ = this.carrito.listaChocolates.asObservable();
  }

  ngOnInit() {
  }
  
}
