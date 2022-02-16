import { Component, OnInit, ResolvedReflectiveFactory, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Ambiente } from 'src/app/shared/model/Ambiente';
import { Quadra } from 'src/app/shared/model/Quadra';
import { Reservas } from 'src/app/shared/model/Reservas';
import { TabAuxiliar } from 'src/app/shared/model/TabAuxiliar';
import { AlertService } from 'src/app/shared/service/alert.service';
import { QuadrasService } from 'src/app/shared/service/quadras.service';
import { ReservasService } from 'src/app/shared/service/reservas.service';
import { TabauxiliarService } from 'src/app/shared/service/tabauxiliar.service';



@Component({
  selector: 'app-nova-reserva',
  templateUrl: './nova-reserva.component.html',
  styleUrls: ['./nova-reserva.component.css']
})

export class NovaReservaComponent implements OnInit {

   formulario:FormGroup = new FormGroup({});

   public quadras:Quadra[] =[];
   public ambientes:Ambiente[]=[]
   public horarios:TabAuxiliar[]=[]
   public quadraSelect: Quadra = new Quadra
   public msg:string = ''

 
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
    private formBuilder: FormBuilder,
    private quadrasService: QuadrasService,
    private alertService: AlertService,
    private tabAuxiliarService: TabauxiliarService
    ) { 
      this.quadrasService.getQuadras().subscribe(q=>{
        this.quadras=q
      })

    }

    

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template, this.config);
    }

  public submit(){    

    if(this.formulario.valid){
      let reserva: Reservas = new Reservas();
      reserva = this.montaReserva()
      this.reservasService.novaReserva(reserva).subscribe(m =>{

        if(m==="sucess"){
          
          this.alertService.alertarSucesso()
          this.ret()

        }else{
          this.alertService.alertarErro()
        }
       
        });
      }

      
    }


    onSelect(){
        //console.log(this.formulario.get('local')?.value)
        let id = this.formulario.get('local')?.value
        this.quadraSelect = this.quadras.
        filter((q)=>q.idQuadra == id)[0]

        this.ambientes = this.quadraSelect.ambientes        
    }
    onSelectData(){
      let reserva = new Reservas()      
      reserva = this.montaReserva()

      if(this.reservasService.validarGetHorario(this.formulario)){
        this.tabAuxiliarService.getHorarios(reserva).subscribe(m =>{

          if(m){
             this.horarios = m
          }else{
             this.alertService.alertarErro()
          }
          
        });           
      }     
    }

   

  
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      local: [null, [Validators.required, Validators.maxLength(35)]],
      ambiente: [null, [Validators.required, Validators.maxLength(35)]],
      data: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      horario: [null, [Validators.required]],
    })
  }

  montaReserva():Reservas{
    let reserva: Reservas = new Reservas()

    reserva.quadra.idQuadra= this.formulario.get('local')?.value
    reserva.ambiente.idAmbiente=this.formulario.get('ambiente')?.value
    reserva.data= this.formulario.get('data')?.value
    reserva.horario= this.formulario.get('horario')?.value
    reserva.idReserva= this.formulario.get('idReserva')?.value

    return reserva
}

ret(){
  this.router.navigate(["/clientes"])
}


}
