import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-consulta-proveedor',
  templateUrl: './consulta-proveedor.component.html',
  styleUrls: ['./consulta-proveedor.component.css'],
})
export class ConsultaProveedorComponent implements OnInit {
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

  ngOnInit(): void {}

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
}
