import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grupo: FormGroup
  recordar: boolean = true
  listaEstados: string [] = [
    "Soltero",
    "Casado",
    "Divorciado",
    "Viudo",
  ]

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.grupo = this.crearFormulario()
  }

  crearFormulario(): FormGroup {
    return this.fb.group({
      correo: [null, [Validators.required, Validators.email]],
      contrasena: [null, [Validators.required, Validators.minLength(8)]],
      recordar: [null, Validators.required],
    })
  }

  ingresar() {
    this.router.navigate(["/clientes"])
  }

}
