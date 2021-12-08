import { Injectable } from '@angular/core';
import { Reservas } from './reservas/Reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  novaReserva(reserva: Reservas){
    console.log("Cadastrando nova reserva")
    console.log(sessionStorage.getItem('login'))
    console.log(sessionStorage.getItem('idUsuario'))
    console.log(reserva)
    return true
  }
  constructor() { }
}
