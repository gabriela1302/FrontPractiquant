import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

const baseURL = "http://localhost:8090/url/lista/listaCliente"
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  listaCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(baseURL);
  }
}
