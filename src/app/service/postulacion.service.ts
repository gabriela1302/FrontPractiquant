import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Postulacion } from '../models/postulacion.model';

const baseURL = "http://localhost:8090/practiquant/postulacion"
@Injectable({
  providedIn: 'root'
})
export class PostulacionService {

  constructor(private http:HttpClient) { } 


   registraPostulacion(data:Postulacion):Observable<any>{
     return this.http.post(baseURL+"/registroPostulacion",data);

   } 
   
    consultaPostulacion(filtro:string): Observable<Postulacion[]>{
      if(filtro.trim() == ''){
        return this.http.get<Postulacion[]>(baseURL+"/listarPostulacionPorDetalleLike/todos");
      }else {
        return this.http.get<Postulacion[]>(baseURL+"/listarPostulacionPorDetalleLike/"+filtro);
      }
    }

    actualizaPostulacion(aux:Postulacion) : Observable<any>{
      return this.http.put<any>(baseURL+"/actualizaPostulacion",aux)
    }


}
