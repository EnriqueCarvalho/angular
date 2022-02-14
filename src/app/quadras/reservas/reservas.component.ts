import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/shared/model/Reservas';
import { ReservasService } from 'src/app/shared/service/reservas.service';


@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

   public reservas:Reservas[] = []

  constructor(private reservasService: ReservasService) { 
    this.reservasService.getReservasByQuadra().subscribe(u=>{
        this.reservas=u
        
    })

  }

  ngOnInit(): void {
   
    
  }

}
