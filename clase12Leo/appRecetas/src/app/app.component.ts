import { AutenticacionService } from './servicios/autenticacion.service';
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioAutenticado: boolean = false
  cargandoRuta: boolean = false

  constructor(private autenticacionService: AutenticacionService, private router: Router, private af: AngularFireAuth) { }

  ngOnInit() {
    this.usuarioAutenticado = this.autenticacionService.estaAutenticado()

    this.af.authState.subscribe(
      usuario => {
        if (usuario) {
          this.autenticacionService.onCambioEstado.next(true)
          sessionStorage.setItem("usuario", JSON.stringify(usuario))
          this.router.navigate(["dashboard"])
        } else {
          this.autenticacionService.onCambioEstado.next(false)
          sessionStorage.clear()
          this.router.navigate([""])
        }
      }
    )


    this.autenticacionService.onCambioEstado
      .subscribe(
        (estado: boolean) => this.usuarioAutenticado = estado
      )

    this.router.events
      .subscribe(
        evt => {
          if (evt instanceof NavigationStart) this.cargandoRuta = true
          if (evt instanceof NavigationEnd) this.cargandoRuta = false
        }
      )
  }

  logout() {
    this.autenticacionService.logout()
  }
}
