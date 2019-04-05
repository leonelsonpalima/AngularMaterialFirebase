import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Receta } from 'src/app/interfaces/receta';

@Component({
  selector: 'app-formulario-receta',
  templateUrl: './formulario-receta.component.html',
  styleUrls: ['./formulario-receta.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioRecetaComponent implements OnInit {

  titulo: string = "Nuevo"
  grupo: FormGroup
  id: any

  archivo: any

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialogRef: MatDialogRef<FormularioRecetaComponent>, private formBuilder: FormBuilder) { }

  ngOnInit() {
    const datos = this.data ? this.data.receta : {}
    this.id = this.data ? this.data.id : ""
    this.titulo = this.data ? "Edición" : "Nuevo"
    this.grupo = this.crearForm(datos)
  }

  crearForm(data: Receta): FormGroup {
    return this.formBuilder.group({
      tituloEspanol: [data.tituloEspanol, Validators.required],
      tituloIngles: [data.tituloIngles, Validators.required],
      imagenes: [data.imagenes]
    })
  }

  guardar() {
    this.dialogRef.close({
      receta: this.grupo.getRawValue(),
      id: this.id
    })
  }

  nuevaImagen(evt) {
    const file: File = evt.target.files[0]

    this.grupo.patchValue({ imagenes: file })

    const fr = new FileReader()

    fr.onloadend = (resultado) => {
      console.log(resultado)
      //this.archivo = (resultado.target as FileReader).result
      this.archivo = (<FileReader>resultado.target).result
    }

    fr.readAsDataURL(file)


    console.log(evt.target.files[0])
  }

}
