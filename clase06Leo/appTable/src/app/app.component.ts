import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '@angular/material';
import { startWith } from "rxjs/operators"
import { Subject, merge } from 'rxjs';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { NotificadorComponent } from './notificador/notificador.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  observador: Subject<any> = new Subject()

  origenDatos: { colegio: string, cantidad: number, distrito: string }[] = []

  columnasAMostrar: string[] = ["distrito", "colegio", "cantidad", "botones"]

  registros = [
    { colegio: "La Recolta", cantidad: 2400, distrito: "Surco" },
    { colegio: "Agustiniano", cantidad: 1200, distrito: "Pueblo Libre" },
    { colegio: "De Jesús", cantidad: 2000, distrito: "Pueblo Libre" }
  ]

  totalRegistros: number = 0
  registrosPorPagina: number = 2

  @ViewChild(MatPaginator) paginador: MatPaginator
  @ViewChild(MatSort) ordenamiento: MatSort

  constructor(private dialogo: MatDialog, private snackBar: MatSnackBar){}

  ngOnInit() {
    this.ordenamiento.active = "colegio"
    this.ordenamiento.direction = "asc"
    merge(this.paginador.page, this.observador, this.ordenamiento.sortChange)
      .pipe(
        startWith({})
      )
      .subscribe(
        pagina => {
          this.cargarData(this.paginador.pageIndex, this.ordenamiento.active, this.ordenamiento.direction)
          //console.log(pagina.pageIndex)
        }
      )


  }

  cargarData(pagina: number, campo: string, direccion: string) {
    const inicio = pagina * this.registrosPorPagina
    const fin = inicio + this.registrosPorPagina

    let data = Object.assign([], this.registros)
    if (campo && campo != "" && direccion != "") {
      data = data.sort((a, b) => {
        if (direccion == "asc") {
          return a[campo] > b[campo] ? -1 : 1
        } else {
          return a[campo] < b[campo] ? -1 : 1
        }
      })
    }
    //const data = [... this.registros]

    this.origenDatos = data.slice(inicio, fin)
    this.totalRegistros = data.length
  }

  agregar() {
    this.registros.push({ colegio: "ABC", cantidad: 200, distrito: "Villa El Salvador" })
    this.observador.next()
  }

  eliminar(){
    const ref: MatDialogRef<ConfirmacionComponent> = this.dialogo.open(ConfirmacionComponent, {
      disableClose: true,
      panelClass: "confirmacion"
    })

    ref.componentInstance.mensaje = "HOLA"

    ref.afterClosed()
    .subscribe(
      (result:any) => {
        if(!result) return false
        console.log("eliminar")
        const ref: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(
          "Registro eliminado",
          "Deshacer",
          {
            duration: 2500,
            direction: "ltr",
            horizontalPosition: "start",
            verticalPosition: "top"
          }
        )
        
        ref.onAction()
        .subscribe(
          result => {
            ref.dismiss()
            console.log("Ejecutar accion")
          }
        )
       /*
       this.snackBar.openFromComponent(NotificadorComponent, {
         duration: 2000
       })
       */
        // Acá se hace la eliminacion
      }
    )

  }


}
