import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

const baseURL_cliente = 'http://localhost:8090/url/cliente';
const baseURL_lista = "http://localhost:8090/url/lista/listaCliente"

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  registrar(data: Cliente): Observable<Cliente>{
    return this.http.post(baseURL_cliente + "/registraCliente", data);;
  }

  consultaCliente(nombres: string, apellidos: string ,ubi: number): Observable<any>{

    const params = new HttpParams()
    .set("nombres", nombres)
    .set("apellidos", apellidos)
    .set("idUbigeo", ubi)

    return this.http.get(baseURL_cliente + "/consultaCliente", {params});
  }


  listaCliente():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(baseURL_lista);
  }

}
