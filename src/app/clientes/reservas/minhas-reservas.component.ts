import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Reservas } from './Reservas';

@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent implements OnInit {


  faCoffee = faCoffee;
   reservas: Reservas[] =[{
     id: '123',
     local: 'Inter SM' ,
     ambiente: 'Campo de Futebol',
     data: '12/12/2012',
     horario: '19:30'
   },{
     id: '321',
     local: 'Dalla Favera' ,
     ambiente: 'Quadra/Churrasqueira',
     data: '13/12/2012',
     horario: '22:30'
   }

  
  ] 
   


  constructor() { }

  ngOnInit(): void {
    for (let i=0; i<this.reservas.length; i++){
      let reservas = this.reservas[i];
      console.log(reservas.id)
    }
  }



}
