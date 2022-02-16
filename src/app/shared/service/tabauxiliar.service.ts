import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservas } from '../model/Reservas';
import { TabAuxiliar } from '../model/TabAuxiliar';

@Injectable({
  providedIn: 'root'
})
export class TabauxiliarService {

  private readonly API_URL = 'http://localhost:8080/';

  constructor(
    private http: HttpClient,

  ) { }



  getHorarios(reserva: Reservas):Observable<TabAuxiliar[]>{
    console.log("Deletando Reserva")
    console.log(reserva)
    let quadra = reserva.quadra.idQuadra;
    let ambiente = reserva.ambiente.idAmbiente
    let data = reserva.data

    
    const params = new HttpParams()
    .set('quadra', quadra)
    .set('ambiente', ambiente)
    .set('data', data);
          
    return this.http.get<TabAuxiliar[]>(this.API_URL+'api/tabauxiliar/getHorarios', {params})
  
  }
  
  
}
