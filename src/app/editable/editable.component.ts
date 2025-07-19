import { Component, OnInit } from '@angular/core';
import { ChocoDatosService } from '../choco-datos.service';
import { Chocolate } from '../choco-list/Choco';

@Component({
  selector: 'app-editable',
  standalone: false,
  templateUrl: './editable.component.html',
  styleUrl: './editable.component.scss'
})
export class EditableComponent implements OnInit {
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
