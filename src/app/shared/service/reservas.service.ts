import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservas } from '../model/Reservas';
import { AmbienteService } from './ambiente.service';
import { AuthService } from './auth.service';
import { QuadrasService } from './quadras.service';
import { tap } from 'rxjs';

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

  novaReserva(reserva: Reservas){
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

}
