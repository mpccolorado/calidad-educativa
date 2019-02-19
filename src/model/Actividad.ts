import { TipoDeActividad } from './TipoDeActividad';
import { Tema } from './Tema';
import { MetodologiaDeEnsenanza } from './MetodologiaDeEnsenanza';
import { Profesor } from './Profesor';

export class Actividad {
  id: number;
  descripcion: string;
  tipoDeActividad: TipoDeActividad;
  temas: Tema[];
  metodologiasDeEnsenanza: MetodologiaDeEnsenanza[];
  grupal: boolean;
  profesores: Profesor[];

  //minimoDeParticipantes, maximo...

  constructor(id: Number, descripcion: string, tipoDeActividad: TipoDeActividad, metodologias: MetodologiaDeEnsenanza[], grupal: boolean, profesores: Profesor[]) {
    this.id = id;
    this.descripcion = descripcion;
    this.tipoDeActividad = tipoDeActividad;
    this.metodologiasDeEnsenanza = metodologias;
    this.grupal = grupal;
    this.temas = [];
    this.profesores = [];
  }
}
