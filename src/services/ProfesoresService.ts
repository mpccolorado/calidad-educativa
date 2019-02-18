import { Injectable } from '@angular/core';
import { Materia } from '../model/Materia';
import { Unidad } from '../model/Unidad';
import { Tema } from '../model/Tema';
import { Clase } from '../model/Clase';
import { TipoDeClase } from '../model/TipoDeClase';
import { Actividad } from '../model/Actividad';
import { TipoDeActividad } from '../model/TipoDeActividad';
import { MetodologiasDeEnsenanzaService } from './MetodologiasDeEnsenanzaService';
import { PuntuacionDeClase } from '../model/PuntuacionDeClase';
import { Profesor } from '../model/Profesor';

@Injectable()
export class ProfesoresService {
  profesores: Profesor[] = [];

  constructor() {
    var imagePrefix = "/assets/imgs/";
    var profesor = new Profesor();
    profesor.apellido = "Simieli";
    profesor.nombres = "Paola";
    profesor.image = `${imagePrefix}paola.jpg`;
    this.profesores.push(profesor);

    profesor = new Profesor();
    profesor.apellido = "Moriena";
    profesor.nombres = "Daniela";
    profesor.image = `${imagePrefix}daniela_moriena.jpg`;
    this.profesores.push(profesor);
  }
}
