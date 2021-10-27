import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Reclamo } from 'src/app/models/reclamo.model';
import { TipoReclamo } from 'src/app/models/tipo-reclamo.model';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { TipoReclamoService } from 'src/app/services/tipo-reclamo.service';

@Component({
  selector: 'app-add-reclamo',
  templateUrl: './add-reclamo.component.html',
  styleUrls: ['./add-reclamo.component.css']
})
export class AddReclamoComponent implements OnInit {

  descripcion:string="";
  estado:number=0;
  selTipoReclamo:number=0;

  arrayClientes: Cliente[]  = [];
  arrayTipoReclamo: TipoReclamo[]  = [];

  reclamos: Reclamo[] = [];

  constructor(
    private tipReclamoService:TipoReclamoService,
    private reclamoService:ReclamoService) 
    {
        tipReclamoService.listaReclamo().subscribe(
          response => this.arrayTipoReclamo = response
      );
   };

   
  consultaReclamo(){
    this.reclamoService.consultaReclamo(this.descripcion, this.estado, this.selTipoReclamo).subscribe(
        response => this.reclamos = response.lista
    );
  }
   
  ngOnInit(): void {
  }

}
