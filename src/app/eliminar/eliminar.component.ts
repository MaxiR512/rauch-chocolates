import { Component } from '@angular/core';
import { ChocoDatosService } from '../choco-datos.service';
import { Chocolate } from '../choco-list/Choco';

@Component({
  selector: 'app-eliminar',
  standalone: false,
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.scss'
})
export class EliminarComponent {
chocolates : Chocolate[]= [];


  constructor(
    private chocosService: ChocoDatosService) {
  }

  ngOnInit() {
    this.chocosService.getAll().subscribe(chocolates => this.chocolates = chocolates);
  }

  borrar(chocolate: Chocolate) {
    this.chocosService.deleteChoco(chocolate.id).subscribe(() => {
      this.chocolates = this.chocolates.filter(c => c.id !== chocolate.id);
    });
  }

}
