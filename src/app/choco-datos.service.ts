import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Chocolate } from './choco-list/Choco';

const URL = 'https://68604e8b8e7486408442f0a7.mockapi.io/rauch-chocolates/Chocolates';

@Injectable({
  providedIn: 'root'
})
export class ChocoDatosService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Chocolate[]> {

        return this.http.get<Chocolate[]>(URL)
        .pipe(
          tap((chocolates) => chocolates.forEach(choco => choco.cantidad = 0)) // Inicializar cantidad a 0
        );
      }
    }
    