import { HttpClient, HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from '../models/reclamo.model';

const baseURL = "http://localhost:8090/rest/reclamo"
@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  constructor(private http:HttpClient) { }

  consultaReclamo(descripcion:string, estado:number, idTipoReclamo:number): Observable<any> {

    const params = new HttpParams()
      .set("descripcion", descripcion)
      .set("estado", estado)
      .set("idTipoReclamo", idTipoReclamo);

    return this.http.get(baseURL + "/porDescripcionClienteTipoReclamo", {params});

  }
}
