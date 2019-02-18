import { Unidad } from './Unidad';
import { Clase } from './Clase';
import { Profesor } from './Profesor';

export class Materia {
  nombre: string;
  unidades: Unidad[];
  clases: Clase[];
  profesores: Profesor[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.unidades = [];
    this.clases = [];
    this.profesores = [];
  }
}
