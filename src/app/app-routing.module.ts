import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostulacionComponent } from './components/postulacion/postulacion.component';
import { PracticaComponent } from './components/practica/practica.component';
import { CrudPerfilComponent } from './components/crud-perfil/crud-perfil.component';
import { CrudPostulacionComponent } from './components/crud-postulacion/crud-postulacion.component';
import { CrudPracticaComponent } from './components/crud-practica/crud-practica.component';


const routes: Routes = [
  {path:"addProducto", component:AddProductoComponent },
  {path:"perfil", component:PerfilComponent },
   {path:"postulacion", component:PostulacionComponent },
  {path:"practica", component:PracticaComponent },
  {path:"crudPerfil", component:CrudPerfilComponent },
   {path:"crudPostulacion", component:CrudPostulacionComponent },
  {path:"crudPractica", component:CrudPracticaComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
