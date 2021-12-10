import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false
  mostrarMenuEmitter = new EventEmitter<boolean>()

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){

      if (usuario.login === 'admin' && usuario.senha === 'admin'){
        sessionStorage.setItem('login',usuario.login);
        sessionStorage.setItem('idUsuario','01');
        sessionStorage.setItem('tipoUsuario','c');
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true)
        this.router.navigate(['/'])
      }else{
        this.usuarioAutenticado = false
        this.mostrarMenuEmitter.emit(false)
      }  
      
  }

  isAutenticado(){
    return this.usuarioAutenticado
  }

}
