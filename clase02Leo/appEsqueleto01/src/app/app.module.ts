import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Route} from "@angular/router";
import { ClientesComponent } from './clientes/clientes.component';
import { TransportistasComponent } from './transportistas/transportistas.component';

const rutas: Route[] = [
  {path: "", component: HomeComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "transportistas", component: TransportistasComponent},
  {path: "**", redirectTo: ""}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    TransportistasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(rutas),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
