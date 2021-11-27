import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { Postulacion } from 'src/app/models/postulacion.model';
import { Practica } from 'src/app/models/practica.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PostulacionService } from 'src/app/service/postulacion.service';
import { PracticaService } from 'src/app/service/practica.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addpostulacion',
  templateUrl: './addpostulacion.component.html',
  styleUrls: ['./addpostulacion.component.css']
})
export class AddpostulacionComponent implements OnInit {
  listaPracticas : Practica[] = [];
  listaPerfiles : Perfil[] = [];

  postulacion: Postulacion = {
    codpostulacion: 0,
   detallepostulante: "",
   fechapostulacion: new Date(),
   codpractica : {
    codpractica:0
   },
   codperfil: {
     codperfil: 0
   },
   estado : 0,


 }




  constructor(private tokenService: TokenService,
    private postulacionservice: PostulacionService,
    private practicaservice: PracticaService,
    private perfilservice:PerfilService) { 

      this.practicaservice.consultaPractica("todos").subscribe(

        practicas => {
          this.listaPracticas = practicas;
        }
  
        
    );

    this.perfilservice.consultaPerfil("todos").subscribe(
     
      perfiles => {
        this.listaPerfiles = perfiles;
      }
 
   );

    

    }


   
  





  


  ngOnInit() {
  }
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
  insertPostulacion(){
    console.log(this.postulacion);
    this.postulacionservice.registraPostulacion(this.postulacion).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      },
    );
  }
  




}
