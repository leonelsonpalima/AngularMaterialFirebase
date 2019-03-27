import { Component } from '@angular/core';

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

  ngOnInit() {
    const intervalo = setInterval(() => {
      if (this.avance >= 100) return false
      this.avance += 5
    }, 500)
  }

  cambio(evt) {
    console.log(evt)
  }
}
