import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';


const baseUrl = 'http://localhost:8090/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  
  consulta(filtro: string): Observable<Producto[]> {
    return this.http.get<Producto[]>(
      baseUrl+ '/listaPorNombre/' + filtro);
  }

  registrar(aux: Producto): Observable<any> {
    return this.http.post<any>(baseUrl + '/registraProducto', aux);
  }

  actualiza(aux: Producto): Observable<any> {
    return this.http.put<any>(baseUrl + '/actualizaProducto', aux);
  }

  elimina(filtro: number): Observable<any> {
    return this.http.delete<Producto>(baseUrl + '/eliminaProducto/' + filtro);
  }

}

