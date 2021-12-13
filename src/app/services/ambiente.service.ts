import { Injectable } from '@angular/core';
import { Ambiente } from '../model/Ambiente';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {
    private ambiente: Ambiente[] = []

  getAmbientes(idQuadra: any){
    this.ambiente = [{
      idAmbiente:   '1',
      nome: 'Quadra 1',
      descricao: 'Quadra de esportes coberta',
      capacidadeMax:  '20'
    },{
      idAmbiente:   '2',
      nome: 'Quadra 2',
      descricao: 'Quadra de esportes aberta',
      capacidadeMax:  '20'
    },{
      idAmbiente:   '3',
      nome: 'Campo 7',
      descricao: 'Campo de futebol 7',
      capacidadeMax:  '30'
    }
  ]
  return this.ambiente
  } 
  
  
  getAmbiente(idQuadra: any){
    this.ambiente = [{
      idAmbiente:   '1',
      nome: 'Quadra 1',
      descricao: 'Quadra de esportes coberta',
      capacidadeMax:  '20'
    }
  ]
  return this.ambiente
  }
  constructor() { }
}
