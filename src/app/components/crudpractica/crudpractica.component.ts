import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';
import { Practica } from 'src/app/models/practica.model';
import { PerfilService } from 'src/app/service/perfil.service';
import { PracticaService } from 'src/app/service/practica.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-crudpractica',
  templateUrl: './crudpractica.component.html',
  styleUrls: ['./crudpractica.component.css']
})
export class CrudpracticaComponent implements OnInit {
  
   practicas: Practica [] = [];
   listaPerfil: Perfil [] = [];


   filtro : string = "";
   practica:Practica={
     codpractica:0,
     detallepractica:"",
     requisitopractica:"",
    // fechatermino:new Date(),
     codperfil:{
       codperfil:0
     }, 

     estado:0

   }





  constructor(private practicaService: PracticaService, private perfilService:PerfilService, private tokenService: TokenService ) { 
   this.perfilService.consultaPerfil("todos").subscribe(
      
    perfiles => {
      this.listaPerfil = perfiles;
    }
   
   );


  }

  consulta(){
    console.log("==> consulta ==> filtro ==>"+this.filtro);

    this.practicaService.consultaPractica(this.filtro).subscribe(
    
     response => this.practicas = response

    );

  } 

  registra(){
    console.log("==> registra ==> filtro ==> " + this.practica.codperfil);
    console.log("==> registra ==> detallepractica ==> "+ this.practica.detallepractica);
    console.log("==> registra ==>  fechafin => "+ this.practica.fechatermino);

     this.practica.estado = 1;
     this.practicaService.registraPractica(this.practica).subscribe(

        response =>{
          alert(response.mensaje);

          var aux:string = this.filtro.trim() == ''? "todos" : this.filtro.trim();
          this.practicaService.consultaPractica(aux).subscribe(

             response => this.practicas = response


          );

          this.practica = {
           
          
            detallepractica:"",
            requisitopractica:"",
            //fechatermino:new Date(),
            codperfil:{
              codperfil:-1
            }, 
       
            estado:0
       
          }

        }


     );
     


  }

  busca(aux:Practica){
    console.log(" ==> busca ==> codpractica ==> "+aux.codpractica);

    this.practica = aux;

    this.perfilService.consultaPerfil("todos").subscribe(
     
       response => this.listaPerfil = response
    );
  }
   

   getEstado(estado:number):string {
    if(estado == 0){
      return "DISPONIBLE";
    } else {
      return "CULMINADA";
    }

   }

   getTextoBoton(estado:number):string {
    if(estado == 0){
      return "LIBERAR";
    } else {
      return "CERRAR";
    }

   } 
 
   
  actualizaEstado(auxPractica: Practica){
    auxPractica.estado = auxPractica.estado == 1 ? 0 :1;

    this.practicaService.actualizaPractica(auxPractica).subscribe(


      /*response => {
      console.log(response.mensaje);
      var aux: string = this.filtro.trim() == '' ? 'todos' : this.filtro.trim();
      this.postulacionService
        .consultaPostulacion(aux)
        .subscribe((response) => (this.postulaciones = response));
        
        (error) =>{
          console.log(error);
        };
    }*/ 
     
      response => {
        console.log(response.mensaje);
        var aux:string = this.filtro.trim() == ''? "todos" : this.filtro.trim();

       this.practicaService
       .consultaPractica(aux)
       .subscribe((response) => (this.practicas = response) );
       
       (error) =>{
        console.log(error);
      };
      }

    );

  }
    
   actualiza(){
    console.log("==> registra ==> filtro ==> " + this.practica.codperfil);
    console.log("==> registra ==> detallepractica ==> "+ this.practica.detallepractica);
    console.log("==> registra ==>  fechafin => "+ this.practica.fechatermino);

    this.practicaService.actualizaPractica(this.practica).subscribe(

     response => {
       alert(response.mensaje);

        var aux:string = this.filtro.trim() == ''? "todos": this.filtro.trim();

         this.practicaService.consultaPractica(aux).subscribe(
            response => this.practicas = response
         );

         this.practica = {
           
          codpractica:0,
          detallepractica:"",
          requisitopractica:"",
          fechatermino:new Date(),
          codperfil:{
            codperfil:-1
          }, 
     
          estado:1
     
        }


     }
    );

   }



  ngOnInit() {
  }
  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}