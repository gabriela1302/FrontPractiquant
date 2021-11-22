import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Reclamo } from 'src/app/models/reclamo.model';
import { TipoReclamo } from 'src/app/models/tipo-reclamo.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { TipoReclamoService } from 'src/app/services/tipo-reclamo.service';

@Component({
  selector: 'app-registra-reclamo',
  templateUrl: './registra-reclamo.component.html',
  styleUrls: ['./registra-reclamo.component.css']
})
export class RegistraReclamoComponent implements OnInit {


  tipoReclamos: TipoReclamo[] = [];

  clientes : Cliente[] = [];

  reclamo: Reclamo ={

    cliente:{
      idCliente:-1,
    }
    ,
    tipoReclamo:{
      idTipoReclamo: -1,
    }


  };
  
  constructor(private tipoReclamoService: TipoReclamoService,
     private reclamoService: ReclamoService,
     private clienteService:ClienteService) {




    console.log(this.reclamo);
    this.tipoReclamoService.listaReclamo().subscribe(

      (tipoReclamos) => this.tipoReclamos = tipoReclamos

    );
    this.clienteService.listaCliente().subscribe(

      (clientes) => this.clientes = clientes

    );


   }

   registraReclamo(){
    console.log(this.reclamo);
      

    this.reclamoService.registrar(this.reclamo).subscribe(
        response => {
            console.log(response.mensaje);
            alert(response.mensaje);
            this.reclamo={
              descripcion:"",
              cliente:{


              },
              tipoReclamo:{
                descripcion:""
              }
            }

          },
          error => {
            console.log(error);
          },
    );
   }



  ngOnInit(): void {
  }

}
