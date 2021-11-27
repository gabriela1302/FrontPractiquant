import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudperfil',
  templateUrl: './crudperfil.component.html',
  styleUrls: ['./crudperfil.component.css']
})
export class CrudperfilComponent implements OnInit {

  constructor(private perfilService: PerfilService, private tokenService: TokenService) { }

  perfiles: Perfil[] = [];
  filtro: string = "";


  perfil: Perfil = {

    codperfil: 0,
    nombre: "",
    apellido: "",
    resumen: "",
    estado: 0,

  }

  consulta() {
    console.log("==> consulta = filtro ==> " + this.filtro);
    this.perfilService.consultaPerfil(this.filtro).subscribe(
      response => this.perfiles = response

    );
  }



  registra() {
    console.log(" ==> registra ==> filtro ==> " + this.perfil.codperfil);
    console.log(" ==> registra ==> nombre ==> " + this.perfil.nombre);
    console.log(" ==> registra ==> apellido ==> " + this.perfil.apellido);

    this.perfil.estado = 1;

    this.perfilService.registrarPerfil(this.perfil).subscribe(

      response => {
        alert(response.mensaje);

        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();

        this.perfilService.consultaPerfil(aux).subscribe(

          response => this.perfiles = response

        );


        this.perfil = {

          codperfil: 0,
          nombre: "",
          apellido: "",
          fnacim: new Date(),
          resumen: "",
          estado: 0,


        }

      }

    );





  }

  getEstado(estado: number): string {
    if (estado == 1) {
      return "ACTIVO";
    } else {
      return "INACTIVO";
    }


  }

  getTextoBoton(estado: number): string {
    if (estado == 0) {
      return "ACTIVAR";
    } else {
      return "DESACTIVAR"
    }

  }

  actualizaEstado(aux: Perfil) {
    console.log(' ==> En actualizaEstado() ');

    this.perfil = aux;
    this.perfil.estado = aux.estado == 1 ? 0 : 1;

    this.perfilService.actualizaPerfil(this.perfil).subscribe(
      (response) => {
        console.log(response.mensaje);
        var aux: string = this.filtro.trim() == '' ? 'todos' : this.filtro.trim();

        this.perfilService
          .consultaPerfil(aux)
          .subscribe(response => this.perfiles = response);
          this.perfil = {
            codperfil: 0,
            nombre: "",
            apellido: "",
            resumen: "",
            estado: 1
          },
        (error) => {
          console.log(error);
        }
      }
    );
  }







  actualiza() {


    console.log(" ==> actualiza ==> codperfil ==> " + this.perfil.codperfil);
    console.log(" ==> actualiza ==> nombre ==> " + this.perfil.nombre);
    console.log(" ==> actualiza ==> apellido ==> " + this.perfil.apellido);


    this.perfilService.actualizaPerfil(this.perfil).subscribe(

      response => {
        alert(response.mensaje);

        var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();

        this.perfilService
          .consultaPerfil(aux)
          .subscribe(response => this.perfiles = response);
        this.perfil = {
          codperfil: 0,
          nombre: "",
          apellido: "",
          fnacim: new Date(),
          resumen: "",
          estado: 1
        }
      }
    );

  }



  busca(aux: Perfil) {
    console.log(" ==> busca ==> codpostulacion ==> " + aux.codperfil);

    this.perfil = aux;
  }


  ngOnInit() {
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}