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

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    const intervalo = setInterval(() => {
      if (this.avance >= 100) return false
      this.avance += 5
    }, 500)

    this.breakpointObserver
      //.observe(["(min-width:500px)"])
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe(
        (estado: BreakpointState) => {
          if (estado.matches) {
            console.log("Vista mínima de 500px")
          } else {
            console.log("No cumple con lo mínimo")
          }
        }
      )



  }

  cambio(evt) {
    console.log(evt)
  }
}
