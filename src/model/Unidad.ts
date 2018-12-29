import { Tema } from './Tema';

export class Unidad {
  nombre: string;
  temas: Tema[];
  mostrar: boolean = false;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.temas = [];
  }
}
