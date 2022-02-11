import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  tipoUsuario: any =''
   

  mostrarMenu: boolean = false

  constructor(private authService: AuthService){}


  ngOnInit(){

    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar)

    this.authService.usuarioLogadoEmitter.subscribe(
      u =>this.tipoUsuario = u.restricao
    )  
  }

  logout(){
    console.log("logout")
    this.authService.logout();
  }
}
