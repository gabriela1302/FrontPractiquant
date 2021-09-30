import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reclamo } from '../models/reclamo.model';

const baseURL = "http://localhost:8090/rest/reclamo"
@Injectable({
  providedIn: 'root'
})
export class ReclamoService {

  constructor(private http:HttpClient) { }

  registarReclamo(data:Reclamo):Observable<any>{
    return this.http.post(baseURL,data);
  }
}
