import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Ambiente } from 'src/app/shared/model/Ambiente';
import { Quadra } from 'src/app/shared/model/Quadra';
import { Reservas } from 'src/app/shared/model/Reservas';
import { QuadrasService } from 'src/app/shared/service/quadras.service';
import { ReservasService } from 'src/app/shared/service/reservas.service';



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
  public quadraSelect: Quadra = new Quadra
  public msg:string = ''
  
  constructor( 
    private reservasService: ReservasService,   
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private quadrasService: QuadrasService,
    private router: Router){ 
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
      let reserva: Reservas = new Reservas();
      reserva.quadra.idQuadra= this.formularioModal.get('local')?.value
      reserva.ambiente.idAmbiente=this.formularioModal.get('ambiente')?.value
      reserva.data= this.formularioModal.get('data')?.value
      reserva.horario= this.formularioModal.get('horario')?.value
      reserva.idReserva= this.formularioModal.get('idReserva')?.value

      

      this.reservasService.novaReserva(reserva).subscribe(m =>{

        if(m==="sucess"){
          this.openModal(this.templateConfirm)
          this.home;
          
        }else{
          alert("ERRO: "+m)
        }
       
        });
      console.log(reserva.idReserva)
      }
    }
    onSelect(){
      
      let id = this.formularioModal.get('local')?.value
      this.quadraSelect = this.quadras.
      filter((q)=>q.idQuadra == id)[0]

      this.ambientes = this.quadraSelect.ambientes        
  }

  editar(reserva:Reservas){
    
    this.formularioModal.reset()    

    this.formularioModal.get('horario')?.patchValue(reserva.horario)
    this.formularioModal.get('data')?.patchValue(reserva.data)
    this.formularioModal.controls['local']?.patchValue(reserva.quadra.idQuadra)    
    this.onSelect()   
    this.formularioModal.controls['ambiente'].patchValue(reserva.ambiente.idAmbiente)
    this.formularioModal.get('idReserva')?.patchValue(reserva.idReserva)
  }

  home(){
    this.router.navigate(['/'])
  }



}
