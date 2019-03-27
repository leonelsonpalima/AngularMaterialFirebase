import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estadosCiviles = ["Casado", "Soltero", "Divorciado", "Conviviente", "Viudo"]

  avance = 0

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
