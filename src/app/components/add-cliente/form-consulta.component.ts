import { Component, OnInit } from '@angular/core';
import { Ubigeo } from '../../models/ubigeo.model';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { UbigeoService } from '../../services/ubigeo.service';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html'
})
export class FormConsultaComponent implements OnInit {

  nombres: string = "";
  apellidos: string = "";
  selDepartamento: string = "";
  selProvincia: string = "";
  selDistrito: number = 0;

  departamentos: any[] = [];
  provincias: any[] = [];
  distritos: Ubigeo[] = [];

  cliente: Cliente[] = [];

  constructor(private clienteService: ClienteService,
    private ubigeoService: UbigeoService) {
    this.ubigeoService.listarDepartamento().subscribe(
      (departamentos) => this.departamentos = departamentos);
  }

  ngOnInit(): void {
  }

  consultaCliente(){
    this.clienteService.consultaCliente(this.nombres, this.apellidos, this.selDistrito).subscribe(
      response => this.cliente = response.lista
      );
  }

  listaProvincia(){
    this.ubigeoService.listaProvincias(this.selDepartamento).subscribe(
          response => this.provincias = response      
    );
  }

  listaDistrito(){
    this.ubigeoService.listaDistritos(this.selDepartamento, this.selProvincia).subscribe(
          response => this.distritos = response      
    );
  }

}
