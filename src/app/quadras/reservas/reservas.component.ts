import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/model/Reservas';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

   public reservas:Reservas[] = []

  constructor(private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.reservas = this.reservasService.getReservasByQuadra('123')
    
  }

}
