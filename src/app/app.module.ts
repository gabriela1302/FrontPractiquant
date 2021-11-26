import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostulacionComponent } from './components/postulacion/postulacion.component';
import { PracticaComponent } from './components/practica/practica.component';
import { CrudPracticaComponent } from './components/crud-practica/crud-practica.component';
import { CrudPostulacionComponent } from './components/crud-postulacion/crud-postulacion.component';
import { CrudPerfilComponent } from './components/crud-perfil/crud-perfil.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProductoComponent,
    PerfilComponent,
    PostulacionComponent,
    PracticaComponent,
    CrudPracticaComponent,
    CrudPostulacionComponent,
    CrudPerfilComponent,
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
