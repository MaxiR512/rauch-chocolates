import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
  
  constructor(){}
  @Input()
  cantidad!: number;
  
  @Input()
  max!: number;
  
  @Output()
  cantidadChange:EventEmitter<number>= new EventEmitter<number>()
  
  @Output()
  maximoStock:EventEmitter<String>= new EventEmitter<String>()
  
  ngOnInit(): void {
  }

  downCantidad(){
    if(this.cantidad>0)
    this.cantidad--;
    this.cantidadChange.emit(this.cantidad);
  }
  upCantidad(){
    if(this.cantidad<this.max){
    this.cantidad++;
    this.cantidadChange.emit(this.cantidad);}
    else{
      this.maximoStock.emit("No hay más Stock");}
  }

  cambiarCantidad(event:any){
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
}

}


