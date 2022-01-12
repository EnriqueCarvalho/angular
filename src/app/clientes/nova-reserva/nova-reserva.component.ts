import { Component, OnInit, ResolvedReflectiveFactory, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Reservas } from 'src/app/shared/model/Reservas';
import { ReservasService } from 'src/app/shared/service/reservas.service';



@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.css']
})

export class NovaReservaComponent implements OnInit {

   formulario:FormGroup = new FormGroup({});
 
  modalRef?: BsModalRef;
  config = {
    animated: true,
    keyboard:false
  };
  @ViewChild('template') template:any

  constructor(
    private reservasService: ReservasService,
    private router: Router,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
    ) { }

    

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, this.config);
    }

  public submit(){    

    if(this.formulario.valid){
      let reserva: Reservas = new Reservas();
      reserva.local= this.formulario.get('local')?.value
      reserva.ambiente=this.formulario.get('ambiente')?.value
      reserva.data= this.formulario.get('data')?.value
      reserva.horario= this.formulario.get('horario')?.value
     this.reservasService.novaReserva(reserva)
      this.openModal(this.template)
    //console.log(this.formulario.get('local')?.value)
      //this.router.navigate(['/'])
    }
    }

    home(){
      this.router.navigate(['/'])
    }

   

  
  ngOnInit(): void {


    this.formulario = this.formBuilder.group({

      local: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      ambiente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      data: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      horario: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
    })
  }

}
