import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = "http://localhost:8090/auth/";

  constructor(private httpCliente: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpCliente.post<any>(this.authURL + 'nuevo', nuevoUsuario);    
  }

  public login(loginUsuario: LoginUsuario): Observable<any>{
    return this.httpCliente.post<JwtDTO>(this.authURL + 'login', loginUsuario);    
  }

}

