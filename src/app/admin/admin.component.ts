import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ChocoDatosService } from '../choco-datos.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

@Output()
  administrador:EventEmitter<boolean>= new EventEmitter<boolean>();
  isAdmin: boolean = false;

 constructor(private chocosService: ChocoDatosService) { 
 }


  formularioAdmin = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    repetirPassword: new FormControl('', [Validators.required]),
  }, [this.isMismatch]);

  isMismatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const repetirPassword = control.get('repetirPassword');
    return password && repetirPassword && password.value !== repetirPassword.value ? { mismatch: true } : null;
  }

  OnSubmit() {
    const { nombre, email, password } = this.formularioAdmin.value;
    if (this.chocosService) {
      this.chocosService.validarUsuario(nombre ?? '', email ?? '', password ?? '');
    }
    if(this.chocosService.validarUsuario(nombre ?? '', email ?? '', password ?? '')) {
      this.isAdmin = true;
      this.administrador.emit(this.isAdmin);
    }
  }

}

