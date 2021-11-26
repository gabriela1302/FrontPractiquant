import { Perfil } from "./perfil.model";
import { Practica } from "./practica.model";

export class Postulacion { 

     codpostulacion?:number;
     detallepostulante?:string;
     fechapostulacion?:Date;
     estado?:string;
     codpractica?:Practica;
     codperfil?:Perfil;

}
