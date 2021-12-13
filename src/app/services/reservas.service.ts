import { Injectable } from '@angular/core';
import { Reservas } from '../model/Reservas';
import { AmbienteService } from './ambiente.service';
import { QuadrasService } from './quadras.service';

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
      quadra: this.quadraService.getQuadrasById(1),
      ambiente: this.ambienteService.getAmbiente('1'), 
      cliente: [{nome:'Enrique'}],     
      local: 'Dalla Favera' ,  
      data: '13/12/2012',
      horario: '22:30'
    },{
      id: '123',
      quadra: this.quadraService.getQuadrasById(1),
      ambiente: this.ambienteService.getAmbientes('1'), 
      cliente: [{nome:'Enrique'}],     
      local: 'Dalla Favera' ,  
      data: '13/12/2012',
      horario: '22:30'
    } ]
    return reservas;   
  }

  getReservasByQuadra(idQuadra:string ){
    let reservas: Reservas[] = []

    reservas=[{
      id: '123',
      quadra: this.quadraService.getQuadrasById(1),
      ambiente: this.ambienteService.getAmbientes('1'), 
      cliente: [{nome:'Enrique'}],     
      local: 'Dalla Favera' ,  
      data: '13/12/2012',
      horario: '22:30'
    },{
      id: '123',
      quadra: this.quadraService.getQuadrasById(1),
      ambiente: this.ambienteService.getAmbientes('1'), 
      cliente: [{nome:'Fernando'}],     
      local: 'Dalla Favera' ,  
      data: '13/12/2012',
      horario: '22:30'
    },{
      id: '123',
      quadra: this.quadraService.getQuadrasById(1),
      ambiente: this.ambienteService.getAmbiente(1), 
      cliente: [{nome:'Rodrigo'}],     
      local: 'Dalla Favera' ,  
      data: '13/12/2012',
      horario: '22:30'
    }]
    return reservas;  
  }
  constructor(
    private ambienteService:AmbienteService,
    private quadraService:QuadrasService,
    ) { }
}
