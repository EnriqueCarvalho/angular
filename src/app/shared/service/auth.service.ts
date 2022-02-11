import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { shiftDate } from 'ngx-bootstrap/chronos';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false
  private readonly API_URL = 'http://localhost:8080/';

  mostrarMenuEmitter = new EventEmitter<boolean>()
  usuarioLogadoEmitter = new EventEmitter<Usuario>()

  constructor(private router: Router,private http: HttpClient) { }




  fazerLogin(usuario: Usuario): Observable<Usuario>{
    console.log(usuario)
      return this.http.post<Usuario>(this.API_URL+'login', usuario);     
  }

  setUsuarioLogado(usuario: Usuario){
    sessionStorage.setItem('usuario-logado', JSON.stringify(usuario));
    this.usuarioAutenticado = true;
    this.mostrarMenuEmitter.emit(true)
    this.usuarioLogadoEmitter.emit(usuario)
    this.router.navigate(["/"])
  }

  isAutenticado():boolean{
    let u: Usuario = JSON.parse(<string>sessionStorage.getItem("usuario-logado"))
    if(u){
      return true
    }
    return false;
  }

  getUsuarioLogado(): Usuario{
    return JSON.parse(<string>sessionStorage.getItem("usuario-logado"))
  }

  logout(): void{
    sessionStorage.removeItem("usuario-logado");
    this.mostrarMenuEmitter.emit(false)
    this.router.navigate(['/login']);
  }

}
