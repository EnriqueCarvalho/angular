import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Reservas } from '../../../model/Reservas';

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
