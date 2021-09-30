import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoReclamo } from '../models/tipo-reclamo.model';


const baseURL = "http://localhost:8090/url/lista/listaTipoReclamo"
@Injectable({
  providedIn: 'root'
})
export class TipoReclamoService {

  constructor(private http:HttpClient) { }

  listaReclamo():Observable<TipoReclamo[]>{
    return this.http.get<TipoReclamo[]>(baseURL);
  }
}
