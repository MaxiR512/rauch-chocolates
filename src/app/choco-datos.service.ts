import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Chocolate } from './choco-list/Choco';

const URL = 'https://68604e8b8e7486408442f0a7.mockapi.io/rauch-chocolates';

@Injectable({
  providedIn: 'root'
})
export class ChocoDatosService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Chocolate[]> {

        return this.http.get<Chocolate[]>(`${URL}/Chocolates`)
        .pipe(
          tap((chocolates) => chocolates.forEach(choco => choco.cantidad = 0)) // Inicializar cantidad a 0
        );
      }

      public validarUsuario(nombre: string, email: string, password: string): Observable<boolean> {
        const body = { nombre, email, password };
        return this.http.post<{ valido: boolean }>(`${URL}/usuarios`, body)
          .pipe(
            map(response => response.valido)
          );
      }
}