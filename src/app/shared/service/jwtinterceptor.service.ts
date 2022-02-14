import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import { AuthService } from './auth.service';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const usuario_logado:Usuario = this.authService.getUsuarioLogado();
     
      if(usuario_logado){
        
        const authRequest = req.clone(
          {setHeaders:{'Authorization':'Bearer '+usuario_logado.token}
         
        }
          
        );
        return next.handle(authRequest);
      }else {
        return next.handle(req);
      }

  }
}
