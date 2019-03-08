import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { startWith } from "rxjs/operators"
import { Subject, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observador: Subject<any> = new Subject()

  origenDatos: { colegio: string, cantidad: number, distrito: string }[] = []

  columnasAMostrar: string[] = ["distrito", "colegio", "cantidadAlumnos"]

  registros = [
    { colegio: "La Recolta", cantidad: 2400, distrito: "Surco" },
    { colegio: "Agustiniano", cantidad: 1200, distrito: "Pueblo Libre" },
    { colegio: "De Jesús", cantidad: 2000, distrito: "Pueblo Libre" }
  ]

  totalRegistros: number = 0
  registrosPorPagina: number = 2

  @ViewChild(MatPaginator) paginador: MatPaginator

  ngOnInit() {
    merge(this.paginador.page, this.observador)
      .pipe(
        startWith({})
      )
      .subscribe(
        pagina => {
          this.cargarData(this.paginador.pageIndex)
          //console.log(pagina.pageIndex)
        }
      )


  }

  cargarData(pagina: number) {
    const inicio = pagina * this.registrosPorPagina
    const fin = inicio + this.registrosPorPagina

    this.origenDatos = this.registros.slice(inicio, fin)
    this.totalRegistros = this.registros.length
  }

  agregar() {
    this.registros.push({ colegio: "ABC", cantidad: 200, distrito: "Villa El Salvador" })
    this.observador.next()
  }


}
