import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  grupo: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.grupo = this.crearFormulario()
  }

  crearFormulario(): FormGroup {
    return this.fb.group({
      correo: [null, [Validators.required, Validators.email]],
      contrasena: [null, Validators.required]
    })
  }

}
