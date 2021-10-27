import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddClienteComponent } from './components/add-cliente/add-cliente.component';
import { AddMarcaComponent } from './components/add-marca/add-marca.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { AddProveedorComponent } from './components/add-proveedor/add-proveedor.component';
import { AddReclamoComponent } from './components/add-reclamo/add-reclamo.component';
import { AddSedeComponent } from './components/add-sede/add-sede.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { FormConsultaComponent } from './components/add-cliente/form-consulta.component';


const routes: Routes = [
  {path:"addCliente", component:AddClienteComponent },
  {path:"addCliente/consultaCliente", component:FormConsultaComponent},
  {path:"addMarca", component:AddMarcaComponent },
  {path:"addProducto", component:AddProductoComponent },
  {path:"addProveedor", component:AddProveedorComponent },
  {path:"addReclamo", component:AddReclamoComponent },
  {path:"addSede", component:AddSedeComponent },
  {path:"addUsuario", component:AddUsuarioComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
