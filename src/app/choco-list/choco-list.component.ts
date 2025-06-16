import { Component, OnInit } from '@angular/core';
import { Chocolate } from './Choco';

@Component({
  selector: 'app-choco-list',
  standalone: false,
  templateUrl: './choco-list.component.html',
  styleUrl: './choco-list.component.scss'
})
export class ChocoListComponent implements OnInit {
  chocolates : Chocolate[]= [{
    nombre:"Negro",
    tipo:"Amargo",
    precio:5500,
    stock: 30,
    imagen:"assets/img/tnegro.jpg",
    cantidad:0,
    oferta:true,
  },
  {
    nombre:"Blanco",
    tipo:"Dulce",
    precio:6300,
    stock: 20,
    imagen:"assets/img/tblanco.jpg",
    cantidad:0,
    oferta:false,
  },
  {
    nombre:"Cadbury",
    tipo:"Semi amargo",
    precio:8000,
    stock: 25,
    imagen:"assets/img/cadbury.jpg",
    cantidad:0,
    oferta:false,
  },
  {
    nombre:"Block",
    tipo:"Negro con maní",
    precio:5200,
    stock: 0,
    imagen:"assets/img/block.jpg",
    cantidad:0,
    oferta:true,
  },
  {
    nombre:"Milka",
    tipo:"Aireado",
    precio:9700,
    stock: 10,
    imagen:"assets/img/milka.jpg",
    cantidad:0,
    oferta: false,
  }
]

  constructor() {}

  ngOnInit() {
  }

  downCantidad(choco:Chocolate){
    if(choco.cantidad>0)
    choco.cantidad--;
  }
  upCantidad(choco:Chocolate){
    if(choco.cantidad<choco.stock)
    choco.cantidad++;
  }

  comprar(){

  }
}
