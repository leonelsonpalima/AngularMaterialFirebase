import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { startWith } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  origenDatos: { colegio: string, cantidad: number, distrito: string }[] = []

  columnasAMostrar: string[] = ["distrito", "colegio", "cantidadAlumnos"]

  registros = [
    { colegio: "La Recolta", cantidad: 2400, distrito: "Surco" },
    { colegio: "Agustiniano", cantidad: 1200, distrito: "Pueblo Libre" },
    { colegio: "De Jesús", cantidad: 2000, distrito: "Pueblo Libre" }
  ]

  totalRegistros: number = 3
  registrosPorPagina: number = 2

  @ViewChild(MatPaginator) paginador: MatPaginator

  ngOnInit() {
    this.paginador.page
      .pipe(
        startWith({ pageIndex: 0 })
      )
      .subscribe(
        pagina => {
          this.cargarData(pagina.pageIndex)
          //console.log(pagina.pageIndex)
        }
      )
  }

  cargarData(pagina: number) {
    const inicio = pagina * this.registrosPorPagina
    const fin = inicio + this.registrosPorPagina

    this.origenDatos = this.registros.slice(inicio, fin)
  }


}
