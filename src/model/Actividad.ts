import { TipoDeActividad } from './TipoDeActividad';
import { Tema } from './Tema';
import { MetodologiaDeEnsenanza } from './MetodologiaDeEnsenanza';

export class Actividad {
  descripcion: string;
  tipoDeActividad: TipoDeActividad;
  temas: Tema[];
  metodologiaDeEnsenanza: MetodologiaDeEnsenanza;
  grupal: boolean;

  //minimoDeParticipantes, maximo...

  constructor(descripcion: string, tipoDeActividad: TipoDeActividad, metodologia: MetodologiaDeEnsenanza, grupal: boolean) {
    this.descripcion = descripcion;
    this.tipoDeActividad = tipoDeActividad;
    this.metodologiaDeEnsenanza = metodologia;
    this.grupal = grupal;
    this.temas = [];
  }
}
