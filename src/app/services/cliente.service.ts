import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';

const baseUrl = 'http://localhost:8090/url/cliente/registraCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  registrar(data: Cliente): Observable<Cliente>{
    return this.http.post(baseUrl, data);
  }

  consultaCliente(nombres: string, apellidos: string ,ubi: number): Observable<any>{

    const params = new HttpParams()
    .set("nombres", nombres)
    .set("apellidos", apellidos)
    .set("idUbigeo", ubi)

    return this.http.get(baseUrl + "/consultaCliente", {params});
  }

}
