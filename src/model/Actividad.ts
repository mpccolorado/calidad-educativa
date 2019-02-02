import { TipoDeActividad } from './TipoDeActividad';
import { Tema } from './Tema';
import { MetodologiaDeEnsenanza } from './MetodologiaDeEnsenanza';

export class Actividad {
  id: number;
  descripcion: string;
  tipoDeActividad: TipoDeActividad;
  temas: Tema[];
  metodologiasDeEnsenanza: MetodologiaDeEnsenanza[];
  grupal: boolean;

  //minimoDeParticipantes, maximo...

  constructor(descripcion: string, tipoDeActividad: TipoDeActividad, metodologias: MetodologiaDeEnsenanza[], grupal: boolean) {
    this.descripcion = descripcion;
    this.tipoDeActividad = tipoDeActividad;
    this.metodologiasDeEnsenanza = metodologias;
    this.grupal = grupal;
    this.temas = [];
  }
}
