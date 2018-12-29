import { Unidad } from './Unidad';
import { Clase } from './Clase';

export class Materia {
  nombre: string;
  unidades: Unidad[];
  clases: Clase[];

  constructor(nombre: string) {
    this.nombre = nombre;
    this.unidades = [];
    this.clases = [];
  }
}
