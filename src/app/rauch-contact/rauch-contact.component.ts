import { Component } from '@angular/core';

@Component({
  selector: 'app-rauch-contact',
  standalone: false,
  templateUrl: './rauch-contact.component.html',
  styleUrl: './rauch-contact.component.scss'
})
export class RauchContactComponent {
  title = 'RaUCH';
  subtitle = 'Chocolatería';
  mail='mrebainera@alumnos.exa.unicen.edu.ar'

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

}
