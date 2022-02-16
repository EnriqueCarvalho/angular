import { Injectable } from '@angular/core';
import { EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
   alertErro = new EventEmitter<boolean>()
   alertSucesso = new EventEmitter<boolean>()

  constructor() { }

  alertarErro(){
    this.alertErro.emit(true)
  }
  alertarSucesso(){
    this.alertSucesso.emit(true)
  }
}
