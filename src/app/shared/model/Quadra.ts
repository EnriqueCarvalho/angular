import { Ambiente } from "./Ambiente"
import { Usuario } from "./Usuario"

export class Quadra extends Usuario{
    id: string = ''
    ambientes: Ambiente []= [] 
    nome: string = ''
    bairro: string = ''
    numero: string = ''
    rua: string = ''
    avaliacao: string = '' 
    cnpj: string = '' 
    descricao: string = ''
    nroAvaliacoes: Number = 0
}