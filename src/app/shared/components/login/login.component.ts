import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { AuthService } from '../../service/auth.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   usuario: Usuario = new Usuario() ;
   formulario:FormGroup = new FormGroup({});
  

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({

      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  
    })
  }
   fazerLogin(){
    if(this.formulario.valid){
    
      this.usuario.login= this.formulario.get('login')?.value
      this.usuario.senha=this.formulario.get('senha')?.value
      this.authService.fazerLogin(this.usuario).subscribe(u=>{
      this.authService.setUsuarioLogado(u)
        
      })
    }
  
  }

}
