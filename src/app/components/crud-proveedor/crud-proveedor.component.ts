import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-crud-proveedor',
  templateUrl: './crud-proveedor.component.html',
  styleUrls: ['./crud-proveedor.component.css'],
})
export class CrudProveedorComponent implements OnInit {
  proveedores: Proveedor[] = [];
  filtro: string = '';

  //Para el ubigeo
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];

  //Json para registrar o actualizar
  proveedor: Proveedor = {
    idProveedor: 0,
    razonsocial: '',
    ruc: '',
    direccion: '',
    estado: 1,
    telefono: '',
    celular: '',
    contacto: '',
    ubigeo: {
      idUbigeo: 0,
      departamento: '-1',
      provincia: '-1',
      distrito: '-1',
    },
  };
  constructor(
    private proveedoService: ProveedorService,
    private ubigeoService: UbigeoService
  ) {
    // Carga departamento
    this.ubigeoService
      .listarDepartamento()
      .subscribe((response) => (this.departamentos = response));
  }

  cargaProvincia() {
    this.ubigeoService
      .listaProvincias(this.proveedor.ubigeo?.departamento)
      .subscribe((response) => (this.provincias = response));
  }

  cargaDistrito() {
    this.ubigeoService
      .listaDistritos(
        this.proveedor.ubigeo?.departamento,
        this.proveedor.ubigeo?.provincia
      )
      .subscribe((response) => (this.distritos = response));
  }

  ngOnInit(): void {}

  consulta() {
    console.log(' ==> consulta ==> filtro ==> ' + this.filtro);

    var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
    this.proveedoService
      .consulta(varFiltro)
      .subscribe((response) => (this.proveedores = response));
  }

  registra() {
    //1 Al registrar el estado es activo
    this.proveedor.estado = 1;

    this.proveedoService.registra(this.proveedor).subscribe(
      (response) => {
        //2 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //3 atualizo la grilla
        var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
        this.proveedoService
          .consulta(varFiltro)
          .subscribe((response) => (this.proveedores = response));

        //4 limpio el formulario actualizando el json
        this.proveedor = {
          idProveedor: 0,
          razonsocial: '',
          ruc: '',
          direccion: '',
          estado: 1,
          telefono: '',
          celular: '',
          contacto: '',
          ubigeo: {
            idUbigeo: 0,
            departamento: '-1',
            provincia: '-1',
            distrito: '-1',
          },
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  busca(aux: Proveedor) {
    //Actualiza el json con el registro seleccionado en la grila
    this.proveedor = aux;

    //Carga provincias
    this.ubigeoService
      .listaProvincias(this.proveedor.ubigeo?.departamento)
      .subscribe((response) => (this.provincias = response));

    //Carga distritos
    this.ubigeoService
      .listaDistritos(
        this.proveedor.ubigeo?.departamento,
        this.proveedor.ubigeo?.provincia
      )
      .subscribe((response) => (this.distritos = response));
  }

  actualiza() {
    this.proveedoService.actualiza(this.proveedor).subscribe(
      (response) => {
        //1 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //2 atualizo la grilla
        var varFiltro: string = this.filtro == '' ? 'todos' : this.filtro;
        this.proveedoService
          .consulta(varFiltro)
          .subscribe((response) => (this.proveedores = response));

        //3 limpio el formulario actualizando el json
        this.proveedor = {
          idProveedor: 0,
          razonsocial: '',
          ruc: '',
          direccion: '',
          estado: 1,
          telefono: '',
          celular: '',
          contacto: '',
          ubigeo: {
            idUbigeo: 0,
            departamento: '-1',
            provincia: '-1',
            distrito: '-1',
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

  actualizaEstado(aux: Proveedor) {
    this.proveedor = aux;
    this.proveedor.estado = aux.estado == 1 ? 0 : 1;

    this.proveedoService.actualiza(this.proveedor).subscribe(
      (response) => {
        console.log(response.mensaje);

        this.proveedoService
          .consulta(this.filtro)
          .subscribe((response) => (this.proveedores = response));

        this.proveedor = {
          idProveedor: 0,
          razonsocial: '',
          ruc: '',
          direccion: '',
          estado: 1,
          telefono: '',
          celular: '',
          contacto: '',
          ubigeo: {
            idUbigeo: 0,
            departamento: '-1',
            provincia: '-1',
            distrito: '-1',
          },
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
