import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/interfaces/receta';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmarComponent } from 'src/app/compartido/confirmar/confirmar.component';
import { RecetasService } from 'src/app/servicios/recetas.service';
import { FormularioRecetaComponent } from '../formulario-receta/formulario-receta.component';
import { Subject, merge } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
	selector: 'app-listado-recetas',
	templateUrl: './listado-recetas.component.html',
	styleUrls: ['./listado-recetas.component.css']
})
export class ListadoRecetasComponent implements OnInit {
	observador: Subject<any> = new Subject<any>()

	recetas: Receta[] = []
	columnasAMostrar: string[] = ["tituloEspanol", "tituloIngles", "acciones"]

	constructor(private recetasService: RecetasService, private dialog: MatDialog) { }

	ngOnInit() {
		merge(this.observador)
			.pipe(
				startWith({}),
				switchMap(() => this.recetasService.listar())
			)
			.subscribe(
				(recetas: Receta[]) => {
					this.recetas = Object.assign([], recetas)
				}
			)
	}

	nuevo() {
		this.formulario()
	}

	editar(receta: Receta, id: number) {
		this.formulario({ receta, id })
	}

	formulario(data = null) {
		const ref = this.dialog.open(FormularioRecetaComponent, {
			panelClass: "miClase",
			data
		})

		ref.afterClosed()
			.subscribe(
				(respuesta: any) => {
					if (!respuesta) return false

					if (respuesta.id != -1) {
						this.recetasService.actualizar(respuesta.categoria, respuesta.id)
							.subscribe(
								() => this.observador.next()
							)
					} else {
						this.recetasService.insertar(respuesta.categoria)
							.subscribe(
								() => this.observador.next()
							)
					}
				}
			)
	}

	eliminar(id: number) {
		const ref: MatDialogRef<ConfirmarComponent> = this.dialog.open(ConfirmarComponent, {
			panelClass: "confirmacion",
			disableClose: true
		})

		ref.componentInstance.mensaje = "¿Quieres borrar?"

		ref.afterClosed().subscribe(
			respuesta => {
				if (!respuesta) return false

				this.recetasService.eliminar(id)
					.subscribe(
						() => this.observador.next()
					)
			}
		)
	}

}
