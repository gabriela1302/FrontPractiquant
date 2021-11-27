import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-addperfil',
  templateUrl: './addperfil.component.html',
  styleUrls: ['./addperfil.component.css']
})
export class AddperfilComponent implements OnInit {

  constructor(private tokenService: TokenService,
    private perfilservice: PerfilService) { }


    
    perfil: Perfil = {

      codperfil: 0,
      nombre: "",
      apellido: "",
      resumen: "",
      estado: 0,
  
    }


  ngOnInit() {
  }
  insertPerfil(){
    console.log(this.perfil);
    this.perfilservice.registrarPerfil(this.perfil).subscribe(
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
