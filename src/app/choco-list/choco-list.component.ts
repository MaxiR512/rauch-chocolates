import { Component, OnInit } from '@angular/core';
import { ChocoCarritoService } from '../choco-carrito.service';
import { ChocoDatosService } from '../choco-datos.service';
import { Chocolate } from './Choco';

@Component({
  selector: 'app-choco-list',
  standalone: false,
  templateUrl: './choco-list.component.html',
  styleUrl: './choco-list.component.scss'
})
export class ChocoListComponent implements OnInit {
  
  chocolates : Chocolate[]= [
    {
      nombre: "negro",
      tipo: "marmolado",
      stock: 30,
      imagen: " ",
      oferta: false,
      cantidad: 0,
      precio: 450
    },
    {
      nombre: "blanco",
      tipo: "marmolado",
      stock: 45,
      imagen: " ",
      oferta: false,
      cantidad: 0,
      precio: 1700
    }
  ];


  constructor(
    private carrito:ChocoCarritoService,
    private chocosService: ChocoDatosService) {
  }

  ngOnInit() {
    this.chocosService.getAll().subscribe(chocolates => this.chocolates = chocolates);
  }

  agregarCarrito(choco:Chocolate){
    this.carrito.agregarCarrito(choco);
    choco.stock-=choco.cantidad;
    choco.cantidad=0;
  }

  maximoStock(m:String){
    alert(m)
  }
  comprar(){

  }
}
