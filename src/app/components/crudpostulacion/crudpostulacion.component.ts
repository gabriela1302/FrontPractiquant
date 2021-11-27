import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { Postulacion } from 'src/app/models/postulacion.model';
import { Practica } from 'src/app/models/practica.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PostulacionService } from 'src/app/service/postulacion.service';
import { PracticaService } from 'src/app/service/practica.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudpostulacion',
  templateUrl: './crudpostulacion.component.html',
  styleUrls: ['./crudpostulacion.component.css']
})
export class CrudpostulacionComponent implements OnInit {

  constructor(private postulacionService: PostulacionService,private tokenService: TokenService, private practicaService: PracticaService, private perfilService: PerfilService) {

    this.practicaService.consultaPractica("todos").subscribe(

      practicas => {
        this.practicas = practicas;
      }

      
  );

  this.perfilService.consultaPerfil("todos").subscribe(
     
     perfiles => {
       this.perfiles = perfiles;
     }

  );

   }

  postulaciones: Postulacion[] = [];
  perfiles: Perfil[] = [];
  practicas: Practica[] = [];
  filtro: string = "";

  postulacion: Postulacion ={
    codpostulacion: 0,
     detallepostulante: "",
     fechapostulacion: new Date(),
     codpractica:{
      codpractica:0
     },
     codperfil: {
       codperfil: 0
     },
     estado: 0
}

consulta(){
  console.log("==> consulta = filtro ==> " + this.filtro);
  this.postulacionService.consultaPostulacion(this.filtro).subscribe(
    response => this.postulaciones = response
  );
}

registra(){
  this.postulacion.estado = 1;
  this.postulacionService.registraPostulacion(this.postulacion).subscribe(
    response => {
      alert(response.mensaje);
      var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
      this.postulacionService.consultaPostulacion(aux).subscribe(
        response => this.postulaciones = response
      );
      this.postulacion = {
        detallepostulante: "",
        fechapostulacion: new Date(),
        codpractica:{
          codpractica:-1
          },
        codperfil: {
          codperfil: -1
          },
        estado: 0
      }
    }
  );
}

getEstado(estado: number): string{
  if(estado == 1){
    return "ACEPTADO";
  }else{
    return "RECHAZADO";
  }
}

actualizaEstado(aux: Postulacion){
  console.log(' ==> En actualizaEstado() ');
  this.postulacion = aux;
  this.postulacion.estado = aux.estado == 1 ? 0 : 1;
  this.postulacionService.actualizaPostulacion(this.postulacion).subscribe(
    response => {
      console.log(response.mensaje);
      var aux: string = this.filtro.trim() == '' ? 'todos' : this.filtro.trim();
      this.postulacionService
        .consultaPostulacion(aux)
        .subscribe((response) => (this.postulaciones = response));
        
        (error) =>{
          console.log(error);
        };
    }
  );
}

actualiza(){
  this.postulacionService.actualizaPostulacion(this.postulacion).subscribe(
    response => {
      alert(response.mensaje);
      var aux: string = this.filtro.trim() == '' ? "todos" : this.filtro.trim();
      this.postulacionService.consultaPostulacion(aux).subscribe(
        response => this.postulaciones = response
      );
      this.postulacion = {
        codpostulacion: 0,
        detallepostulante: "",
        fechapostulacion: new Date(),
        codpractica:{
          codpractica:-1
          },
        codperfil: {
          codperfil: -1
          },
        estado: 1
      }
    }
  );
}

busca(aux: Postulacion){
  console.log(" ==> busca ==> codpostulacion ==> " + aux.codpostulacion); 
  
  this.postulacion = aux;

  this.practicaService.consultaPractica("todos").subscribe(
      
    response => this.practicas = response
 );

 this.perfilService.consultaPerfil("todos").subscribe(
   response => this.perfiles = response
 );

}

  ngOnInit() {
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
