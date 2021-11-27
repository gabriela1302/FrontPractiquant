import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { CrudperfilComponent } from './components/crudperfil/crudperfil.component';
import { CrudpostulacionComponent } from './components/crudpostulacion/crudpostulacion.component';
import { CrudpracticaComponent } from './components/crudpractica/crudpractica.component';
import { AddperfilComponent } from './components/addperfil/addperfil.component';
import { AddpostulacionComponent } from './components/addpostulacion/addpostulacion.component';
import { AddpracticaComponent } from './components/addpractica/addpractica.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'lista', component: ListaProductoComponent},
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  
  
  {path:"perfil", component:AddperfilComponent },
   {path:"postulacion", component:AddpostulacionComponent },
  {path:"practica", component:AddpracticaComponent },
  {path:"crudPerfil", component:CrudperfilComponent },
   {path:"crudPostulacion", component:CrudpostulacionComponent },
  {path:"crudPractica", component:CrudpracticaComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
