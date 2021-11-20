import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';


@NgModule({
  declarations: [
    AppComponent,
    AddClienteComponent,
    AddMarcaComponent,
    AddProductoComponent,
    AddProveedorComponent,
    AddReclamoComponent,
    AddSedeComponent,
    AddUsuarioComponent,
    FormConsultaComponent,
    CrudClienteComponent,
    CrudProveedorComponent,
    CrudReclamoComponent,
    ConsultaProveedorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
