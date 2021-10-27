import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { Ubigeo } from 'src/app/models/ubigeo.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { UbigeoService } from 'src/app/services/ubigeo.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  departamentos: string[] = [];
  provincias: string[] = [];
  distritos: Ubigeo[] = [];

  cliente: Cliente = {

    ubigeo: {
      idUbigeo: -1,
      departamento: "-1",
      provincia: "-1",
      distrito: "-1",
    }
  };

  constructor(private clienteService: ClienteService, private ubigeoService: UbigeoService) {
    this.ubigeoService.listarDepartamento().subscribe(
      (departamentos) => this.departamentos = departamentos
    );
  }

  ngOnInit(): void {
  }

  registraCliente() {
    console.log(this.cliente);
    this.clienteService.registrar(this.cliente).subscribe(
      response => {
        console.log(response);
        alert(response);
      },
      error => {
        console.log(error);
      },
    );
  }

  listaProvincia() {
    console.log("listaProvincia>>>" + this.cliente.ubigeo?.departamento);
    this.ubigeoService.listaProvincias(this.cliente.ubigeo?.departamento).subscribe(
      (provincias) => this.provincias = provincias
    );
  }

  listaDistrito() {
    console.log("listaDistrito>>>" + this.cliente.ubigeo?.departamento);
    console.log("listaDistrito>>>" + this.cliente.ubigeo?.provincia);
    this.ubigeoService.listaDistritos(this.cliente.ubigeo?.departamento, this.cliente.ubigeo?.provincia).subscribe(
      (distritos) => this.distritos = distritos
    );
  }

}
