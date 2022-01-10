import { Ambiente } from "./Ambiente"
import { Cliente } from "../clientes/model/Cliente"
import { Quadra } from "../quadras/model/Quadra"

export class Reservas {
    id : string = ''
    ambiente : Ambiente[] = []
    quadra : Quadra[] = []
    cliente : Cliente[] = []
    local: string = '' 
    data: string = '' 
    horario: string = '' 
}