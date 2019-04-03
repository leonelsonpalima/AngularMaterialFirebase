import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/servicios/categorias.service';
import { Categoria } from 'src/app/interfaces/categoria';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmarComponent } from 'src/app/compartido/confirmar/confirmar.component';
import { FormularioCategoriaComponent } from '../formulario-categoria/formulario-categoria.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-listado-categorias',
	templateUrl: './listado-categorias.component.html',
	styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

	categorias: Categoria[] = []
	columnasAMostrar: string[] = ["nombreEspanol", "nombreIngles", "acciones"]

	constructor(private categoriasService: CategoriasService, private dialog: MatDialog, private fs: AngularFirestore) { }

	ngOnInit() {
		// this.fs.collection("categorias").valueChanges()
		// .subscribe(
		// 	resultado => console.log(resultado)
		// )
		this.fs.collection('categorias').snapshotChanges()
		.pipe(
			map(arrDocumentos => {
				return arrDocumentos.map(doc => {
					return {
					id: doc.payload.doc.id,
					... doc.payload.doc.data()
					}
				})
			})
		)
		.subscribe(
			resultado => console.log(resultado)
		)
		this.listar()
	}

	listar() {
		this.categoriasService.listar()
			.subscribe(
				(categorias: Categoria[]) => {
					this.categorias = Object.assign([], categorias)
				}
			)
	}

	nuevo() {
		this.formulario()
	}

	editar(categoria: Categoria, id: number) {
		this.formulario({ categoria, id })
	}

	formulario(data = null) {
		const ref = this.dialog.open(FormularioCategoriaComponent, {
			panelClass: "miClase",
			data
		})

		ref.afterClosed()
			.subscribe(
				(respuesta: any) => {
					if (!respuesta) return false

					if (respuesta.id != -1) {
						this.categoriasService.actualizar(respuesta.categoria, respuesta.id)
							.subscribe(
								() => this.listar()
							)
					} else {
						this.categoriasService.insertar(respuesta.categoria)
							.subscribe(
								() => this.listar()
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

				this.categoriasService.eliminar(id)
					.subscribe(
						() => this.listar()
					)
			}
		)
	}
}
