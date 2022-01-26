import { Injectable } from '@angular/core';
import { Quadra } from '../model/Quadra';
import { AmbienteService } from './ambiente.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class QuadrasService {
 
  private readonly API = 'api/quadras/getQuadras'


  constructor(
    private ambiente: AmbienteService,
    private httpClient: HttpClient
    ) { }

    getQuadrasById(idQuadra : number){
      let quadra: Quadra = new Quadra
      return quadra
    }
    getQuadras(){

      return this.httpClient.get<Quadra[]>(this.API)
      .pipe(
        tap(quadras => console.log(quadras))
      )
      
    }

}
