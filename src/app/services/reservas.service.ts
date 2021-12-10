import { Injectable } from '@angular/core';
import { Reservas } from '../model/Reservas';

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

  getMinhasReservas(){
    let reservas: Reservas[] = []

    reservas=[{
      id: '123',
      local: 'Inter SM' ,
      ambiente: 'Campo de Futebol',
      data: '12/12/2012',
      horario: '19:30'
    },{
      id: '123',
      local: 'Dalla Favera' ,
      ambiente: 'Quadra/Churrasqueira',
      data: '13/12/2012',
      horario: '22:30'
    } ]
    return reservas;   
  }
  constructor() { }
}
