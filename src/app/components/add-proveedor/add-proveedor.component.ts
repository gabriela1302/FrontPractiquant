import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.component.html',
  styleUrls: ['./add-proveedor.component.css'],
})
//Ejemplo
export class AddProveedorComponent implements OnInit {
  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];

  proveedor: Proveedor = {
    razonsocial: '',
    ruc: '',
    ubigeo: {
      idUbigeo: 0,
      departamento: '-1',
      provincia: '-1',
      distrito: '0',
    },
  };

  proveedores: Proveedor[] = [];

  constructor(
    private ubigeoService: UbigeoService,
    private proveedorService: ProveedorService
  ) {
    this.ubigeoService
      .listarDepartamento()
      .subscribe((departamentos) => (this.departamentos = departamentos));
  }

  consultaProveedor() {
    console.log(this.proveedor);
    this.proveedorService
      .consultaProveedor(
        this.proveedor.razonsocial!,
        this.proveedor.ruc!,
        this.proveedor.ubigeo?.idUbigeo!
      )
      .subscribe((response) => (this.proveedores = response.lista));
  }

  registroProveedor() {
    console.log(this.proveedor);
    this.proveedorService.registroProveedor(this.proveedor).subscribe(
      (response) => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  listaProvincia() {
    this.ubigeoService
      .listaProvincias(this.proveedor.ubigeo?.departamento)
      .subscribe((provincias) => (this.provincias = provincias));
  }

  listaDistrito() {
    this.ubigeoService
      .listaDistritos(
        this.proveedor.ubigeo?.departamento,
        this.proveedor.ubigeo?.provincia
      )
      .subscribe((distritos) => (this.distritos = distritos));
  }

  ngOnInit(): void {}
}
