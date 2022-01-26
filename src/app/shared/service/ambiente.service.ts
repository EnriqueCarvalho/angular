import { Injectable } from '@angular/core';
import { Ambiente } from '../model/Ambiente';
import { Quadra } from '../model/Quadra';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {
   

  getAmbientes(idQuadra: any): Ambiente[]{
    let ambiente: Ambiente[];
    ambiente = [{
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
  return ambiente
  } 
  
  
  getAmbiente(idQuadra: any){
    let ambiente: Ambiente[] = []
    ambiente = [{
      idAmbiente:   '1',
      nome: 'Quadra 1',
      descricao: 'Quadra de esportes coberta',
      capacidadeMax:  '20'
    }
  ]
  return ambiente
  }
  constructor() { }
}
