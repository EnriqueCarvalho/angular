import { Injectable } from '@angular/core';
import { EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
   alertErro = new EventEmitter<boolean>()
   alertSucesso = new EventEmitter<boolean>()
   alertDataMenor = new EventEmitter<boolean>()

  constructor() { }

  alertarErro(){
    this.alertErro.emit(true)
  }
  alertarSucesso(){
    this.alertSucesso.emit(true)
  }
  alertarDataMenor(){
    this.alertDataMenor.emit(true)
  }
  
}
