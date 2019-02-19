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

  constructor(id: Number, materia: Materia, fechaDeInicio: Date, tipoDeClase: TipoDeClase) {
    this.id = id;
    this.materia = materia;
    this.fechaDeInicio = fechaDeInicio;
    this.tipoDeClase = tipoDeClase;
    this.actividades = [];
  }
}
