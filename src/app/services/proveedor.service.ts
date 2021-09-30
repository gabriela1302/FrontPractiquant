import { HttpClient } from '@angular/common/http';
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
}
