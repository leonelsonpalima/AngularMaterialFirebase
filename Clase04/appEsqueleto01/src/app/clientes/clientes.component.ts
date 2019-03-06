import { ClientesService } from '../servicios/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: ICliente[]

  grupo: FormGroup

  constructor(private clientesService: ClientesService, private dialogo: MatDialog) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    })
    this.listarClientes()
  }

  listarClientes() {
    this.clientesService.listar()
      .subscribe(
        registros => this.listaClientes = registros
      )
  }

  grabar() {
    const cliente: ICliente = this.grupo.getRawValue()
    this.clientesService.grabar(cliente)
      .subscribe(
        respuesta => {
          this.listarClientes()
          this.grupo.reset()
        }
      )
  }

  editar(cliente: ICliente, indice: number) {
    const referencia: MatDialogRef<FormularioClienteComponent> = this.dialogo.open(FormularioClienteComponent,
      {
        /* width: "400px",
        height: "500px", */
        panelClass: "formulario",
        disableClose: true,
        data: cliente,
        closeOnNavigation: false,
        direction: "ltr",
        hasBackdrop: false,
        position: {
          right: "50px",
          bottom: "50px"
        }
      }
    )

    referencia.afterClosed()
      .subscribe(
        respuesta => {
          if (!respuesta) return false

          this.clientesService.editar(respuesta, indice)
            .subscribe(
              respuesta => this.listarClientes()
            )
        }
      )
  }


}
