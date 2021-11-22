import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Reclamo } from 'src/app/models/reclamo.model';
import { TipoReclamo } from 'src/app/models/tipo-reclamo.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { ReclamoService } from 'src/app/services/reclamo.service';
import { TipoReclamoService } from 'src/app/services/tipo-reclamo.service';

@Component({
  selector: 'app-crud-reclamo',
  templateUrl: './crud-reclamo.component.html',
  styleUrls: ['./crud-reclamo.component.css']
})
export class CrudReclamoComponent implements OnInit {
  reclamos: Reclamo[] = [];
  filtro: string = '';

  tipoReclamos: TipoReclamo[] = [];
  clientes : Cliente[] = [];

  //Json para registrar o actualizar
  reclamo: Reclamo = {
    idReclamo: 0,
    descripcion: '',
    estado: 1,
    cliente: {
      idCliente: 0,
    },
    tipoReclamo: {
      idTipoReclamo: 0,
    },
  };
  constructor(
    private reclamoService: ReclamoService,
    private tipoReclamoService: TipoReclamoService,
    private clienteService: ClienteService
  ) {
    // Carga tipo reclamo
    this.tipoReclamoService
      .listaReclamo()
      .subscribe((response) => (this.tipoReclamos = response));
  }

  cargaCliente() {
    this.clienteService
      .listaCliente()
      .subscribe((response) => (this.clientes = response));
  }

  ngOnInit(): void {}

  consulta() {
    console.log(' ==> consulta ==> filtro ==> ' + this.filtro);

    var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
    this.reclamoService
      .consulta(varFiltro)
      .subscribe((response) => (this.reclamos = response));
  }

  registra() {
    //1 Al registrar el estado es activo
    this.reclamo.estado = 1;

    this.reclamoService.registra(this.reclamo).subscribe(
      (response) => {
        //2 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //3 atualizo la grilla
        var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
        this.reclamoService
          .consulta(varFiltro)
          .subscribe((response) => (this.reclamos = response));

        //4 limpio el formulario actualizando el json
        this.reclamo = {
          idReclamo: 0,
          descripcion: '',
          estado: 1,
          cliente: {
            idCliente: 0,
          },
          tipoReclamo: {
            idTipoReclamo: 0,
          },
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  busca(aux: Reclamo) {
    //Actualiza el json con el registro seleccionado en la grila
    this.reclamo = aux;

    //Carga provincias
    this.tipoReclamoService
      .listaReclamo()
      .subscribe((response) => (this.tipoReclamos = response));

    //Carga distritos
    this.clienteService
      .listaCliente()
      .subscribe((response) => (this.clientes = response));
  }

  actualiza() {
    this.reclamoService.actualiza(this.reclamo).subscribe(
      (response) => {
        //1 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //2 atualizo la grilla
        var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
        this.reclamoService
          .consulta(varFiltro)
          .subscribe((response) => (this.reclamos = response));

        //3 limpio el formulario actualizando el json
        this.reclamo = {
          idReclamo: 0,
          descripcion: '',
          estado: 1,
          cliente: {
            idCliente: 0,
          },
          tipoReclamo: {
            idTipoReclamo: 0,
          },
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getEstado(aux: number): string {
    return aux == 1 ? 'Activo' : 'Inactivo';
  }

  getTextoBotonEstado(aux: number): string {
    return aux == 1 ? 'Desactivar' : 'Activar';
  }

  actualizaEstado(aux: Reclamo) {
    this.reclamo = aux;
    this.reclamo.estado = aux.estado == 1 ? 0 : 1;

    this.reclamoService.actualiza(this.reclamo).subscribe(
      (response) => {
        console.log(response.mensaje);

        this.reclamoService
          .consulta(this.filtro)
          .subscribe((response) => (this.reclamos = response));

        this.reclamo = {
          idReclamo: 0,
          descripcion: '',
          estado: 1,
          cliente: {
            idCliente: 0,
          },
          tipoReclamo: {
            idTipoReclamo: 0,
          },
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
