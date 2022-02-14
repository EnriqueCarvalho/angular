import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService implements ErrorHandler{

  constructor(private authService: AuthService, private zone: NgZone) {
  }

  handleError(error: HttpErrorResponse | any): void {

    if(error instanceof HttpErrorResponse){

      // console.log("status")
      // console.log(error.status);
      //  console.log("status")
      //  console.log(error.error)
      //  console.log("status")
      //  console.log(error.message)
      //  console.log("status")
      //  console.log(error.url);
  
      switch (error.status){
        case 400:
          alert(error.error)
          break;
        case 401:
          alert('Sessão expirada')
          this.zone.run( ()=>{
            this.authService.logout();
          });
          break;
        case 403:
          alert('Acesso negado')
          break;
          case 0:
            alert('Não foi possível conectar ao servidor...')
          break;
          case 409:
            alert("Não foi possível realizar a operação")
          break;
      }


    }

  }
}
