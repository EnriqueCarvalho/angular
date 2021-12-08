import { Component, OnInit, ResolvedReflectiveFactory, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReservasService } from '../reservas.service';
import { Reservas } from '../reservas/Reservas';


@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.css']
})

export class NovaReservaComponent implements OnInit {
 
  modalRef?: BsModalRef;
  config = {
    animated: true,
    keyboard:false
  };
  @ViewChild('template') template:any

  constructor(
    private reservasService: ReservasService,
    private router: Router,
    private modalService: BsModalService
    ) { }

    

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, this.config);
    }

  public submit(form: any){    

    if(form.valid){
      let reserva: Reservas = new Reservas();
      let reservasService:ReservasService = new ReservasService();
      reserva.local= form.value.local
      reserva.ambiente= form.value.ambiente
      reserva.data= form.value.data
      reserva.horario= form.value.horario
      let ret = reservasService.novaReserva(reserva)
      this.openModal(this.template)
      //this.router.navigate(['/'])
    }
    }

    home(){
      this.router.navigate(['/'])
    }

   

  
  ngOnInit(): void {
  }

}
