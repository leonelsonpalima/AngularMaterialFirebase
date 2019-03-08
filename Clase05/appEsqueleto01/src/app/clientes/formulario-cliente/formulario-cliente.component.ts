import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormularioClienteComponent implements OnInit {

  grupo: FormGroup

  constructor(@Inject(MAT_DIALOG_DATA) private datos, private referencia: MatDialogRef<FormularioClienteComponent>) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(this.datos.nombre, Validators.required),
      descripcion: new FormControl(this.datos.descripcion, Validators.required)
    })
  }

  grabar() {
    this.referencia.close(this.grupo.getRawValue())
  }

}
