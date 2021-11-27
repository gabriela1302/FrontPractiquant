import { Perfil } from "./perfil.model";
import { Practica } from "./practica.model";

export class Postulacion {
    codpostulacion?: number;
    detallepostulante?: String;
    fechapostulacion?:Date;
    codpractica?: Practica;
    codperfil?: Perfil;
    estado? : number;
}
