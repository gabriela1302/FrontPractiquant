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

import { CrudClienteComponent } from './components/crud-cliente/crud-cliente.component';
import { CrudProveedorComponent } from './components/crud-proveedor/crud-proveedor.component';
import { CrudReclamoComponent } from './components/crud-reclamo/crud-reclamo.component';


const routes: Routes = [
  {path:"addCliente", component:AddClienteComponent },
   {path:"addMarca", component:AddMarcaComponent },
  {path:"addProducto", component:AddProductoComponent },
  {path:"addProveedor", component:AddProveedorComponent },
  {path:"addSede", component:AddSedeComponent },
  {path:"addUsuario", component:AddUsuarioComponent },

  {path:"consultaReclamo", component:AddReclamoComponent },
  {path:"addCliente/consultaCliente", component:FormConsultaComponent},

  
  {path:"crudCliente", component:CrudClienteComponent },
  {path:"crudProveedor", component:CrudProveedorComponent },
  {path:"crudReclamo", component:CrudReclamoComponent },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
