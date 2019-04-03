import { Injectable } from '@angular/core';
import { Categoria } from '../interfaces/categoria';
import { of, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CategoriasService {

	private lista: Categoria[] = [
		{ nombreEspanol: "Entremeses y Sanguches", nombreIngles: "Appetizers and Sandwiches" },
		{ nombreEspanol: "Sopas", nombreIngles: "Soups" },
		{ nombreEspanol: "Carnes y Aves", nombreIngles: "Meat and Poultry" }
	]

	constructor() { }

	listar(): Observable<any> {
		return of(this.lista)
	}

	insertar(categoria: Categoria): Observable<any> {
		this.lista.push(categoria)
		return of(null)
	}

	detallar(id: number): Observable<any> {
		return of(this.lista[id])
	}

	actualizar(categoria: Categoria, id: number): Observable<any> {
		this.lista[id] = categoria
		return of(null)
	}

	eliminar(id: number): Observable<any> {
		this.lista.splice(id, 1)
		return of(null)
	}
}
