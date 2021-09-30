import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Reclamo } from 'src/app/models/reclamo.model';
import { TipoReclamo } from 'src/app/models/tipo-reclamo.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { TipoReclamoService } from 'src/app/services/tipo-reclamo.service';

@Component({
  selector: 'app-add-reclamo',
  templateUrl: './add-reclamo.component.html',
  styleUrls: ['./add-reclamo.component.css']
})
export class AddReclamoComponent implements OnInit {

  lstTipoReclamo:TipoReclamo[]=[];
  lstCliente:Cliente[]=[];
  reclamo:Reclamo={
    tipoReclamo:{
      idTipoReclamo: 0,
      descripcion : ""
    } ,
    cliente:{
      idCliente:0,
      apellidos:""
    } 
  }
  constructor(
    private tipoReclamoService:TipoReclamoService,
    private clienteService:ClienteService,
    private reclamoService:ReclamoService) 
    {
      this.tipoReclamoService.listaReclamo().subscribe(
        tipoReclamo => this.lstTipoReclamo=tipoReclamo
      );
      this.clienteService.listaCliente().subscribe(
        cliente => this.lstCliente=cliente
      );
   };

   registra(){
     console.log(this.reclamo);
     this.reclamoService.registarReclamo(this.reclamo).subscribe(
       response =>{
         console.log(response.mensaje);
         alert(response.mensaje);
       },
       error =>{
        console.log(error);
       },
       
      );
   }
   
  ngOnInit(): void {
  }

}
