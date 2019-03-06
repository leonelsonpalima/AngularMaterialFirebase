import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router"
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TransportistasComponent } from './transportistas/transportistas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioClienteComponent } from './clientes/formulario-cliente/formulario-cliente.component';

const rutas: Route[] = [
  { path: "", component: HomeComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "transportistas", component: TransportistasComponent },
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    TransportistasComponent,
    FormularioClienteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormularioClienteComponent]
})
export class AppModule { }
