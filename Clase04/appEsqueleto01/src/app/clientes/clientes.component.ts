import { ClientesService } from '../servicios/clientes.service';
import { Component, OnInit } from '@angular/core';
import { ICliente } from '../interfaces/cliente.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes: ICliente[]

  grupo: FormGroup

  constructor(private clientesService: ClientesService) { }

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

}
