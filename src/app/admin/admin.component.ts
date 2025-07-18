import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  formularioAdmin = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repetirPassword: new FormControl('', [Validators.required]),
  }, [this.isMismatch]);

  isMismatch(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const repetirPassword = control.get('repetirPassword');
    return password && repetirPassword && password.value !== repetirPassword.value ? { mismatch: true } : null;
  }

  OnSubmit() {
    console.log(this.formularioAdmin.value);
  }
}
