import { ClientesService } from '../servicios/clientes.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MatPaginator } from '@angular/material';
import { Subject, merge } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: ICliente[]
  columnasAMostrar: string[] = ["nombre", "descripcion"]
  grupo: FormGroup

  observador: Subject<any> = new Subject()

  totalRegistros: number
  registrosPorPagina: number = 5

  @ViewChild(MatPaginator) paginador: MatPaginator

  constructor(private clientesService: ClientesService, private dialogo: MatDialog) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    })

    merge(this.observador, this.paginador.page)
      .pipe(
        startWith({})
      )
      .subscribe(
        () => {
          this.listarClientes(this.paginador.pageIndex)
        }
      )
  }

  listarClientes(pagina: number) {
    this.clientesService.listar(pagina)
      .subscribe(
        (respuesta: any) => {
          this.listaClientes = respuesta.slice
          this.totalRegistros = respuesta.cantidadRegistros
        }
      )
  }

  grabar() {
    const cliente: ICliente = this.grupo.getRawValue()
    this.clientesService.grabar(cliente)
      .subscribe(
        respuesta => {
          this.observador.next()
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
              respuesta => this.observador.next()
            )
        }
      )
  }


}
