import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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

  totalPrecio: number = 0;
  totalChocolates: number=0;
  listaCarritoActualizada = new BehaviorSubject<Chocolate[]>([]);

  constructor(private carrito: ChocoCarritoService){
    this.listaChocolates$ = this.carrito.listaChocolates.asObservable();
  }

  ngOnInit() {
    this.listaChocolates$.subscribe(chocolates => {
      this.totalPrecio = chocolates.reduce((total, chocolate) => total + (chocolate.cantidad * chocolate.precio), 0);
      this.totalChocolates = chocolates.reduce((total, chocolate) => total + chocolate.cantidad, 0);
    });
  }
  
  actualizarCarrito() {
    this.listaChocolates$.subscribe(chocolates => {
      this.totalPrecio = chocolates.reduce((total, chocolate) => total + (chocolate.cantidad * chocolate.precio), 0);
      this.totalChocolates = chocolates.reduce((total, chocolate) => total + chocolate.cantidad, 0);
      this.listaCarritoActualizada.next(chocolates);
    });
  }

}
