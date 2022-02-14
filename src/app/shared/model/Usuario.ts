import { Cliente } from "./Cliente"
import { Quadra } from "./Quadra"

export class Usuario{
    id: string = ''
    login: string = ''
    senha: string  = ''
    token:string = ''
    restricao: string = ''  
    cliente?: Cliente
    quadra?: Quadra   

  

}
    //  constructor(login:string,senha:string,email:string,restricao:string){
    //     this.login = login
    //     this.senha = senha
    //     this.email = email
    //     this.restricao = restricao
    //  }
   
