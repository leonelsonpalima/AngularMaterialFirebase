import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { Observable, of } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({
	providedIn: 'root'
})
export class RecetasService {

	private lista: Receta[] = [
		{
			tituloEspanol: "Arroz con pollo",
			tituloIngles: "Rice with chicken",
			sumillaEspanol: "Delicioso arroz con pollo",
			sumillaIngles: "The best rice with chicken",
			ingredientesEspanol: ["arroz", "pollo"],
			ingredientesIngles: ["rice", "chicken"],
			instruccionesEspanol: ["cocinar el arroz", "freir el pollo"],
			instruccionesIngles: ["to cook rice", "to fry chicken"],
			estado: true
		},
		{
			tituloEspanol: "Sopa criolla",
			tituloIngles: "Peruvian Soup",
			sumillaEspanol: "Típica sopa peruana",
			sumillaIngles: "Tipical peruvian soup",
			ingredientesEspanol: ["agua", "huevo", "cebolla", "ajos", "carne"],
			ingredientesIngles: ["water", "egg", "onion", "garlic"],
			estado: true
		}
	]

	constructor() { }

	listar(): Observable<any> {
		return of(this.lista)
	}

	insertar(receta: Receta): Observable<any> {
		this.lista.push(receta)
		return of(null)
	}

	detallar(id: number): Observable<any> {
		return of(this.lista[id])
	}

	actualizar(receta: Receta, id: number): Observable<any> {
		this.lista[id] = receta
		return of(null)
	}

	eliminar(id: number): Observable<any> {
		this.lista.splice(id, 1)
		return of(null)
	}
}
