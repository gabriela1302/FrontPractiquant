import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { Practica } from 'src/app/models/practica.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PracticaService } from 'src/app/service/practica.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addpractica',
  templateUrl: './addpractica.component.html',
  styleUrls: ['./addpractica.component.css']
})
export class AddpracticaComponent implements OnInit {
  listaPerfiles : Perfil[] = [];
  
  practica:Practica={
    codpractica:0,
    detallepractica:"",
    requisitopractica:"",
    codperfil:{
      codperfil:0
    }, 

    estado:0

  }




  constructor(private tokenService: TokenService,
        private perfilservice: PerfilService,
        private practicaservice: PracticaService) {
          this.perfilservice.consultaPerfil("todos").subscribe(

            perfiles => {
              this.listaPerfiles = perfiles;
            }
      

          )
         }




  ngOnInit() {
  }

  insertPractica(){
    console.log(this.practica);
    this.practicaservice.registraPractica(this.practica).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje)
      },
      error =>{
        console.log(error);
      },
    );
  }


  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
