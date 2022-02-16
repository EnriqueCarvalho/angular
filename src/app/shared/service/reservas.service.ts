import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservas } from '../model/Reservas';
import { AmbienteService } from './ambiente.service';
import { AuthService } from './auth.service';
import { QuadrasService } from './quadras.service';
import { tap } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private ambienteService:AmbienteService,
    private quadraService:QuadrasService,
    private http: HttpClient,
    private authService: AuthService
    ) { }

  novaReserva(reserva: Reservas):Observable<string>{
    console.log("Cadastrando nova Reserva")
    console.log(reserva)
    return this.http.post(this.API_URL+'api/reservas/novaReserva', reserva, {responseType: 'text'});
  
  }
  
  getReservasByQuadra():Observable<Reservas[]>{ 

    return this.http.get<Reservas[]>(this.API_URL+'api/reservas/getReservas')
    .pipe(
      tap(u => console.log(u))
    );
  }

  getMinhasReservas():Observable<Reservas[]>{
    return this.http.get<Reservas[]>(this.API_URL+'api/reservas/getMinhasReservas')
    .pipe(
      tap(u => console.log(u))
    );
  }

  excluirReserva(reserva: Reservas){
    console.log("Deletando Reserva")
    console.log(reserva)
    return this.http.post(this.API_URL+'api/reservas/deletarReserva', reserva, {responseType: 'text'});
  
  }

  validarGetHorario(formulario:FormGroup):boolean{
    
    if(formulario.get('local')?.valid &&
      formulario.get('ambiente')?.valid && 
      formulario.get('data')?.valid ){
      return true 
    }
    return false
  }

}
