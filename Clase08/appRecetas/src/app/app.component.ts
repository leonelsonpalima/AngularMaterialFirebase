import { AutenticacionService } from './servicios/autenticacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioAutenticado: boolean = false

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.usuarioAutenticado = this.autenticacionService.estaAutenticado()

    this.autenticacionService.onCambioEstado
      .subscribe(
        (estado: boolean) => this.usuarioAutenticado = estado
      )
  }

  logout() {
    this.autenticacionService.logout()
  }
}
