import { Ambiente } from "./Ambiente"
import { Cliente } from "./Cliente"
import { Quadra } from "./Quadra"


export class Reservas {
    idReserva : string = ''
    ambiente : Ambiente = new Ambiente
    quadra: Quadra=new Quadra
    cliente : Cliente= new Cliente 
    data: string = '' 
    horario: string = '' 
    ativo: string = ''
}