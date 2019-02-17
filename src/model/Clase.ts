import { Actividad } from './Actividad';
import { TipoDeClase } from './TipoDeClase';
import { PuntuacionDeClase } from './PuntuacionDeClase';
import { Materia } from './Materia';

export class Clase {
  id: Number;
  fechaDeInicio: Date; //ToDo: cambiar a Date
  fechaDeFin: Date;
  actividades: Actividad[];
  tipoDeClase: TipoDeClase;
  puntuacionDeClase: PuntuacionDeClase;
  materia: Materia;

  constructor(materia: Materia, fechaDeInicio: Date, tipoDeClase: TipoDeClase) {
    this.materia = materia;
    this.fechaDeInicio = fechaDeInicio;
    this.tipoDeClase = tipoDeClase;
    this.actividades = [];
  }
}
