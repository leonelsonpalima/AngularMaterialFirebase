import { AutenticacionService } from './servicios/autenticacion.service';
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	usuarioAutenticado: boolean = false
	cargandoRuta: boolean = false

	constructor(private autenticacionService: AutenticacionService, private router: Router) { }

	ngOnInit() {
		this.usuarioAutenticado = this.autenticacionService.estaAutenticado()

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
