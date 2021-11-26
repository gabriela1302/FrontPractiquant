import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  productos: Producto[] = [];
  filtro: number = 0; // delete
  filtroS: string = ''; //listado

  //Json para registrar o actualizar
  producto: Producto = {
    idProducto: 0,
    nombreProducto: '',
    cantidad: 0,
    precioUnitario: 0,
    stock: 0,
  };

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {

  }

  consulta() {

    console.log(' ==> consulta ==> filtro ==> ' + this.filtro);

    var varFiltro: string = this.filtroS == '' ? 'todos' : this.filtroS;
    this.productoService
        .consulta(varFiltro)
        .subscribe((response) => (this.productos = response));

  }

  registra() {
    
    this.productoService.registrar(this.producto).subscribe(
      (response) => {
        //2 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);
        var varFiltro: string = this.filtroS == '' ? 'todos' : this.filtroS;
        this.productoService
          .consulta(varFiltro)
          .subscribe((response) => (this.productos = response));

        //4 limpio el formulario actualizando el json
        this.producto = {
          idProducto: 0,
          nombreProducto: '',
          cantidad: 0,
          precioUnitario: 0,
          stock: 0,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  busca(aux: Producto) {
    //Actualiza el json con el registro seleccionado en la grila
    this.producto = aux;
  }

  actualiza() {
    this.productoService.actualiza(this.producto).subscribe(
      (response) => {
        //1 envío el mensaje
        console.log(response.mensaje);
        alert(response.mensaje);

        //2 atualizo la grilla
        var varFiltro: string = this.filtroS == '' ? 'todos' : this.filtroS;
        this.productoService
          .consulta(varFiltro)
          .subscribe((response) => (this.productos = response));

        //3 limpio el formulario actualizando el json
        this.producto = {
          idProducto: 0,
          nombreProducto: '',
          cantidad: 0,
          precioUnitario: 0,
          stock: 0,
        };
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizaEstado() {
    this.productoService.elimina(this.filtro).subscribe(
      (response) => (this.productos = response)
      );
  }
}
