import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Ambiente } from 'src/app/shared/model/Ambiente';
import { Quadra } from 'src/app/shared/model/Quadra';
import { Reservas } from 'src/app/shared/model/Reservas';
import { AlertService } from 'src/app/shared/service/alert.service';
import { QuadrasService } from 'src/app/shared/service/quadras.service';
import { ReservasService } from 'src/app/shared/service/reservas.service';
import { TabAuxiliar } from 'src/app/shared/model/TabAuxiliar';
import { TabauxiliarService } from 'src/app/shared/service/tabauxiliar.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-minhas-reservas',
  templateUrl: './minhas-reservas.component.html',
  styleUrls: ['./minhas-reservas.component.css']
})
export class MinhasReservasComponent implements OnInit {
  public reservas: Reservas[] = [] 
  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm:any
 
  formularioModal:FormGroup = new FormGroup({});


  public quadras:Quadra[] =[];
  public ambientes:Ambiente[]=[]
  public horarios:TabAuxiliar[]=[]
  public horarioAntigo:string = ''
  public quadraSelect: Quadra = new Quadra
  public msg:string = ''
  public dataAtual = new Date();

  
  
  constructor( 
    private reservasService: ReservasService,   
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private quadrasService: QuadrasService,
    private router: Router,
    private alertService: AlertService,
    private tabAuxiliarService: TabauxiliarService
   ){ 
      this.quadrasService.getQuadras().subscribe(q=>{
        this.quadras=q
      })
      
    }

  ngOnInit(): void {  
    this.reservasService.getMinhasReservas().subscribe(u=>{
      this.reservas=u

      this.formularioModal = this.formBuilder.group({
        local: [null, [Validators.required]],
        ambiente: [null, [Validators.required]],
        data: [null, [Validators.required]],
        horario: [null, [Validators.required]],
        idReserva: [null, [Validators.required]],
      })  
  })     
  
  }



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {
      ariaDescribedby: 'my-modal-description',
      ariaLabelledBy: 'my-modal-title'
    });  
    

 
  }


  public submit(){    

   
    if(this.formularioModal.valid){
      this.modalRef?.hide()
      let reserva: Reservas = new Reservas();
     
      reserva = this.montaReserva()     

      this.reservasService.novaReserva(reserva).subscribe(m =>{
        console.log(m)
        if(m==="sucess"){
          this.alertService.alertarSucesso()
          this.router.navigate(["/"])
          
        }else{
          if(m==="data"){
            this.alertService.alertarDataMenor()
            console.log(m)
          }else{
            this.alertService.alertarErro()
            console.log(m)
          } 
        }
       
        });
      console.log(reserva.idReserva)
      }
    }
    onSelect(){
      console.log("DATA ATUAL")
 
      
      let id = this.formularioModal.get('local')?.value
      this.quadraSelect = this.quadras.
      filter((q)=>q.idQuadra == id)[0]

      this.ambientes = this.quadraSelect.ambientes        
  }
  onSelectData(){
    let reserva = new Reservas()      
    reserva = this.montaReserva()

    if(this.reservasService.validarGetHorario(this.formularioModal)){
      this.tabAuxiliarService.getHorarios(reserva).subscribe(m =>{

        if(m){
           this.horarios = m
        }else{
           this.alertService.alertarErro()
        }
        
      });           
    }     
  }

  editar(reserva:Reservas){
    
    this.formularioModal.reset()    

    
    
    this.formularioModal.get('data')?.patchValue(reserva.data)
    this.formularioModal.controls['local']?.patchValue(reserva.quadra.idQuadra)    
    this.onSelect()   
    this.formularioModal.controls['ambiente'].patchValue(reserva.ambiente.idAmbiente)
    this.formularioModal.get('idReserva')?.patchValue(reserva.idReserva)

    this.horarioAntigo = reserva.horario
    this.onSelectData()
  }



  excluirReserva(){
    let reserva: Reservas = new Reservas()
    reserva = this.montaReserva()
    console.log("veio")
    this.reservasService.excluirReserva(reserva).subscribe(m =>{

      if(m==="sucess"){
        this.modalRef?.hide()
        this.alertService.alertarSucesso()
        this.router.navigate(["/"])
        
      }else{
      this.alertService.alertarErro()
      }
     
      });
   
    

  }

  montaReserva():Reservas{
      let reserva: Reservas = new Reservas()

      reserva.quadra.idQuadra= this.formularioModal.get('local')?.value
      reserva.ambiente.idAmbiente=this.formularioModal.get('ambiente')?.value
      reserva.data= this.formularioModal.get('data')?.value
      reserva.horario= this.formularioModal.get('horario')?.value
      reserva.idReserva= this.formularioModal.get('idReserva')?.value

      return reserva
  }


}
