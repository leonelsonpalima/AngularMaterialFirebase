import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OlvidoComponent } from './olvido/olvido.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "olvido", component: OlvidoComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "recetas", loadChildren: "../recetas/recetas.module#RecetasModule" },
  { path: "usuarios", loadChildren: "../usuarios/usuarios.module#UsuariosModule" },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
