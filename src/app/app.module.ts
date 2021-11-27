import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
import { CrudpracticaComponent } from './components/crudpractica/crudpractica.component';
import { CrudperfilComponent } from './components/crudperfil/crudperfil.component';
import { CrudpostulacionComponent } from './components/crudpostulacion/crudpostulacion.component';
import { AddperfilComponent } from './components/addperfil/addperfil.component';
import { AddpostulacionComponent } from './components/addpostulacion/addpostulacion.component';
import { AddpracticaComponent } from './components/addpractica/addpractica.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    CrudpracticaComponent,
    CrudperfilComponent,
    CrudpostulacionComponent,
    AddperfilComponent,
    AddpostulacionComponent,
    AddpracticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  // poner interceptorProvider en el providers:[]
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
