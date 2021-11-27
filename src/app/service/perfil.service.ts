import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';

const baseURL = "http://localhost:8090/practiquant/perfiles"
@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http:HttpClient) { }


  registrarPerfil(data:Perfil):Observable<any>{
     return this.http.post(baseURL+"/registraPerfil",data);

  }

  consultaPerfil(filtro:String):Observable<Perfil[]> {

    if(filtro.trim()==''){
      return this.http.get<Perfil[]>(baseURL+"/listaPerfilPorNombreLike/todos");
    }else {
      return this.http.get<Perfil[]>(baseURL+"/listaPerfilPorNombreLike/"+filtro);
    }

  }

  actualizaPerfil(aux:Perfil) : Observable<any>{
    return this.http.put<any>(baseURL+"/actualizarPerfil",aux)
  }

}