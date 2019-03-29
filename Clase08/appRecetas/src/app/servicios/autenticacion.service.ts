import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  onCambioEstado: Subject<boolean> = new Subject<boolean>()

  constructor(private router: Router) { }

  login(usuario: Usuario) {
    this.onCambioEstado.next(true)
    sessionStorage.setItem("usuario", JSON.stringify(usuario))
    this.router.navigate(["dashboard"])
  }

  logout() {
    this.onCambioEstado.next(false)
    sessionStorage.clear()
    this.router.navigate([""])
  }

  estaAutenticado(): boolean {
    if (sessionStorage.getItem("usuario")) return true
    return false
  }
}
