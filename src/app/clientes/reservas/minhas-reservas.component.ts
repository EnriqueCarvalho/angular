import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/shared/model/Reservas';
import { ReservasService } from 'src/app/shared/service/reservas.service';



@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent implements OnInit {
  public reservas: Reservas[] = [] 

  
  constructor( private reservasService: ReservasService ) { }

  ngOnInit(): void {  
    this.reservas = this.reservasService.getMinhasReservas();
  }



}
