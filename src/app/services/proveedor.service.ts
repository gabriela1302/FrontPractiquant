import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor.model';

const baseUrl = 'http://localhost:8090/rest/proveedor';

const baseUrlCRUD = 'http://localhost:8090/rest/crudProveedor';
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

  consulta(filtro: string): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(
      baseUrlCRUD + '/listaProveedorPorNombreLike/' + filtro
    );
  }

  registra(aux: Proveedor): Observable<any> {
    return this.http.post<any>(baseUrlCRUD + '/registraProveedor', aux);
  }

  actualiza(aux: Proveedor): Observable<any> {
    return this.http.put<any>(baseUrlCRUD + '/actualizaProveedor', aux);
  }
}
