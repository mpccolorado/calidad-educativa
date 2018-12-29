import { Actividad } from './Actividad';
import { TipoDeClase } from './TipoDeClase';
import { PuntuacionDeClase } from './PuntuacionDeClase';

export class Clase {
  fechaDeInicio: string; //ToDo: cambiar a Date
  fechaDeFin: Date;
  actividades: Actividad[];
  tipoDeClase: TipoDeClase;
  puntuacionDeClase: PuntuacionDeClase;

  constructor(fechaDeInicio: string, tipoDeClase: TipoDeClase) {
    this.fechaDeInicio = fechaDeInicio;
    this.tipoDeClase = tipoDeClase;
    this.actividades = [];
  }
}
