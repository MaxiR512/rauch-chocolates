import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChocoDatosService } from '../choco-datos.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

 constructor(
  private chocosService: ChocoDatosService) {
 }

  formularioAdmin = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    precio: new FormControl('', [Validators.required]),
    stock: new FormControl('', [Validators.required]),
    oferta: new FormControl(''),
    imagen: new FormControl(''),
  });


OnSubmit() {
    const { nombre, tipo, precio, stock, oferta, imagen } = this.formularioAdmin.value;

    this.chocosService.addChoco(
        nombre ?? '',
        tipo ?? '',
        Number(precio) ?? 0,
        Number(stock) ?? 0,
        Boolean(oferta),
        imagen ?? ''
    ).subscribe();
    this.formularioAdmin.reset();
}

}

