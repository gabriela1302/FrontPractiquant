import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Practica } from '../models/practica.model';

const baseURL = "http://localhost:8090/practiquant/practicas"
@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  constructor(private http:HttpClient) { }

  registraPractica(data:Practica):Observable<any>{
    return this.http.post(baseURL + "/registraPractica", data);
  } 

  consultaPractica(filtro:String):Observable<Practica[]>{
    if(filtro.trim()==''){

      return this.http.get<Practica[]>(baseURL+"/listaPracticaPorDetalleLike/todos");

    } else {
      return this.http.get<Practica[]>(baseURL+"/listaPracticaPorDetalleLike/"+filtro);
    }
  }


  actualizaPractica(aux:Practica):Observable<any>{
    return this.http.put<any>(baseURL+"/actualizaPractica",aux)
  }


}
