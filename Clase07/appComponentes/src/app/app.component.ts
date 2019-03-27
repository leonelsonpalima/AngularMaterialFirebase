import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estadosCiviles = ["Casado", "Soltero", "Divorciado", "Conviviente", "Viudo"]

  avance = 0

  fechaActual = new Date()
  fechaMinima = this.fechaActual.setFullYear(this.fechaActual.getFullYear() - 18)

  fecha = new Date(2018, 6, 24)

  estadoSeleccionado = 2

  col1 = 1
  col2 = 2
  col3 = 3
  row1 = 1
  row2 = 2

  constructor(private breakpointObserver: BreakpointObserver) { }

  default() {
    this.col1 = 1
    this.col2 = 2
    this.col3 = 3
    this.row1 = 1
    this.row2 = 2
  }

  movil() {
    this.col1 = 4
    this.col2 = 4
    this.col3 = 4
    this.row1 = 1
    this.row2 = 1
  }

  ngOnInit() {
    const intervalo = setInterval(() => {
      if (this.avance >= 100) return false
      this.avance += 5
    }, 500)

    this.breakpointObserver
      //.observe(["(min-width:500px)"])
      .observe(["(max-width:500px)"])
      .subscribe(
        (estado: BreakpointState) => {
          if (estado.matches) {
            this.movil()
          } else {
            this.default()
          }
        }
      )



  }

  cambio(evt) {
    console.log(evt)
  }
}
