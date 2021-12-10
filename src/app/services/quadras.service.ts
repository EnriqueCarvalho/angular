import { Injectable } from '@angular/core';
import { Quadra } from '../model/Quadra';
import { AmbienteService } from './ambiente.service';


@Injectable({
  providedIn: 'root'
})
export class QuadrasService {
  private  quadras: Quadra[] = []

   getQuadras(){
  this.quadras = [{
    id : '',
    ambientes: this.ambiente.getAmbientes(1),
    nome : 'Dalla Favera',
    bairro : 'Camobi ',
    numero : '123',
    rua : 'Rua das Bergamotas',
    avaliacao : '2' ,
    cnpj : '',
    descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Fusce ultricies fringilla elementum. Donec dapibus maximus volutpat. 
     Pellentesque tellus ex, aliquam ac eleifend ac ` 
   },{
    id : '',
    ambientes: this.ambiente.getAmbientes(1),
    nome : 'Ginásio do Basso',
    bairro : 'Camobi',
    numero : '321',
    rua : 'Rua da Mandioca',
    avaliacao : '4' ,
    cnpj : '',
    descricao: `
       euismod nec dui. In elementum felis sed erat interdum, 
       commodo viverra elit cursus. Duis non vehicula velit, finibus mollis odio. 
    `  
   },{
    id : '',
    ambientes: this.ambiente.getAmbientes(1),
    nome : 'Ginásio do Pito',
    bairro : 'Centro',
    numero : '321',
    rua : 'Rua da Mandioca',
    avaliacao : '5' ,
    cnpj : '',
    descricao: `
       euismod nec dui. In elementum felis sed erat interdum, 
       commodo viverra elit cursus. Duis non vehicula velit, finibus mollis odio. 
    `  
   }]

   return this.quadras
  }
  constructor(private ambiente: AmbienteService) { }
}
