import { Ambiente } from "./Ambiente"
import { Cliente } from "./Cliente"
import { Quadra } from "./Quadra"


export class Reservas {
    id : string = ''
    ambiente : Ambiente[] = []
    quadra : Quadra[] = []
    cliente : Cliente[] = []
    local: string = '' 
    data: string = '' 
    horario: string = '' 
}