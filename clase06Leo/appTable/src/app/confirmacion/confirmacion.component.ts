import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmacionComponent implements OnInit {


  public mensaje: string = "¿Está seguro de querer eliminar?"
  constructor() { }

  ngOnInit() {
  }

}
