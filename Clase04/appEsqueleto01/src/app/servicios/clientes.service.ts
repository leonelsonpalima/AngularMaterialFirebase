import { Injectable } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { of, Observable } from 'rxjs';
import { delay } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private lista: ICliente[] = [
    { nombre: "nombre 01", descripcion: "descripcion 01" },
    { nombre: "nombre 02", descripcion: "descripcion 02" },
    { nombre: "nombre 03", descripcion: "descripcion 03" },
    { nombre: "nombre 04", descripcion: "descripcion 04" },
    { nombre: "nombre 05", descripcion: "descripcion 05" },
    { nombre: "nombre 06", descripcion: "descripcion 06" },
    { nombre: "nombre 07", descripcion: "descripcion 07" }
  ]
  constructor() { }

  listar(): Observable<ICliente[]> {
    return of(this.lista)
      .pipe(
        delay(500)
      )
  }

  grabar(cliente: ICliente): Observable<any> {
    this.lista.push(cliente)
    return of({})
      .pipe(
        delay(500)
      )
  }

  editar(cliente: ICliente, indice: number): Observable<any> {
    this.lista[indice] = cliente
    return of({})
      .pipe(
        delay(500)
      )
  }
}
