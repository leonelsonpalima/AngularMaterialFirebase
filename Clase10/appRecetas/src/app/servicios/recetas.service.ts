import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
import { Observable, of, Subject } from 'rxjs';
import { Categoria } from '../interfaces/categoria';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

	/*private lista: Receta[] = [
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
  ]*/

  private lista: Receta[] = []

  onCambioRecetas: Subject<Categoria[]> = new Subject<Categoria[]>()

  constructor(private fs: AngularFirestore, private fstorage: AngularFireStorage) { }

  listar(): Observable<any> {
    return this.fs.collection("recetas").snapshotChanges()
      .pipe(
        map(arrDocumentos => {
          return arrDocumentos.map(doc => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data()
            }
          })
        })
      )
  }

  insertar(receta: Receta) {
    const archivo: File = receta.imagenes
    const ruta = `imagenes/${Date.now()}_${archivo.name}`
    const ref: AngularFireStorageReference = this.fstorage.ref(ruta)
    const tarea: AngularFireUploadTask = ref.put(archivo)
    tarea.snapshotChanges()
      .pipe(
        finalize(() => {
          return ref.getDownloadURL()
        })
      )
      .subscribe(
        url => console.log(url)
      )
    //this.fs.collection("recetas").add(receta)
  }

  detallar(id: number): Observable<any> {
    return of(this.lista[id])
  }

  actualizar(receta: Receta, id: string) {
    const ref = this.fs.collection("recetas").doc(id)
    ref.update(receta)
  }

  eliminar(id: string) {
    this.fs.doc(`recetas/${id}`).delete()
  }
}
