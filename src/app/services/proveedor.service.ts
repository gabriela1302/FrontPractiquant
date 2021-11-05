import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';

const baseUrl = 'http://localhost:8090/rest/proveedor';
@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  constructor(private http: HttpClient) {}

  registroProveedor(data: Proveedor): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  consultaProveedor(
    razon: string,
    ruc: string,
    idUbigeo: number
  ): Observable<any> {
    const params = new HttpParams()
      .set('razon', razon)
      .set('ruc', ruc)
      .set('idUbigeo', idUbigeo);

    return this.http.get(baseUrl + '/porRazonRucUbigeoConParametros', {
      params,
    });
  }
}
