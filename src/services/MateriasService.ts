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
import { ProfesoresService } from './ProfesoresService';

@Injectable()
export class MateriasService {
  materias: Materia[] = [];
  materiaSeleccionada: Materia;

  constructor(private metodologiasDeEnsenanzaService: MetodologiasDeEnsenanzaService,
              private profesoresService: ProfesoresService) {
    const materia = new Materia("Sistemas y Organizaciones");
    materia.profesores.push(profesoresService.profesores[0]);
    materia.profesores.push(profesoresService.profesores[1]);
    const unidad1 = new Unidad("Introducción a los sistemas");
    unidad1.temas.push(new Tema("La teoría general de Sistemas y el Enfoque Sistémico", "Sus aportes, su filosofía y su método"));
    unidad1.temas.push(new Tema("Introducción a los sistemas - metasistema - subsistemas", "Ejemplos, Conceptos e Identificación"));
    unidad1.temas.push(new Tema("Conceptos elementales de sistemas", "Ambiente, límite, objetivo, alcances, recursos, entrada, procesos, salida, retroalimentación"));
    unidad1.temas.push(new Tema("Estructura de los sistemas", "Componentes, relaciones y atributos (definidores y concomitantes)"));
    unidad1.temas.push(new Tema("Características y propiedades de los sistemas", "Entropía, adaptabilidad, sinergia, integración, estabilidad, eficiencia"));
    unidad1.temas.push(new Tema("Clasificación de los Sistemas", "según distintos criterios"));
    materia.unidades.push(unidad1);

    const unidad2 = new Unidad("Las Organizaciones");
    unidad2.temas.push(new Tema("La organización", "La Organización como Sistema. Conceptos y Características"));
    unidad2.temas.push(new Tema("Elementos de una organización", "Individuos, grupos, recursos materiales, tecnológicos y financieros"));
    unidad2.temas.push(new Tema("El contexto o medio de la organización", "Elementos de acción directa y elementos de acción indirecta"));
    unidad2.temas.push(new Tema("Finalidad de las organizaciones", "Objetivos personales. Objetivos organizacionales"));
    unidad2.temas.push(new Tema("Clasificación de las organizaciones", "La empresa: concepto y visualización de las mismas por diversos criterios (por su construcción jurídica, por su tamaño, por su capital, por su actividad económica)"));
    unidad2.temas.push(new Tema("Identificación de los diferentes subsistemas organizacionales", ""));
    unidad2.temas.push(new Tema("Estructuras organizacionales", "Representación. Ventajas y desventajas"));
    unidad2.temas.push(new Tema("Delegación, Centralización y descentralización.", "Relaciones dentro de las organizaciones"));
    unidad2.temas.push(new Tema("Manual de funciones", ""));
    unidad2.temas.push(new Tema("Herramientas para representar la estructura formal de la organización", "Organigramas: Conceptos. Regla para su construcción"));
    materia.unidades.push(unidad2);

    this.materias.push(materia);

    const clase1 = new Clase(1, materia, new Date("04/01/2019"), TipoDeClase.PRESENCIAL);

    let actividad1 = new Actividad(1, null, TipoDeActividad.TEORIA, [metodologiasDeEnsenanzaService.metodologias[0]], null, []);
    actividad1.temas.push(unidad1.temas[0]);
    actividad1.temas.push(unidad1.temas[1]);
    clase1.actividades.push(actividad1);

    let actividad2 = new Actividad(2, null, TipoDeActividad.PRACTICA, [metodologiasDeEnsenanzaService.metodologias[1]], true, []);
    actividad2.temas.push(unidad1.temas[0]);
    actividad2.temas.push(unidad1.temas[1]);
    clase1.actividades.push(actividad2);

    clase1.puntuacionDeClase = new PuntuacionDeClase();
    clase1.puntuacionDeClase.puntajeContenido = 3.5;
    clase1.puntuacionDeClase.puntajeEnsenanza = 4.2;
    clase1.puntuacionDeClase.puntajeRecursosUtilizados = 2.0;
    clase1.puntuacionDeClase.mensajes.push("Creo que debería dejar de usar filminas en las clases para que sea más interactiva");
    clase1.puntuacionDeClase.mensajes.push("La clase se desarrolla un poco lenta");

    materia.clases.push(clase1);

    const clase2 = new Clase(2, materia, new Date("04/12/2019"), TipoDeClase.FUERA_DEL_AULA);

    actividad1 = new Actividad(3, null, TipoDeActividad.PRACTICA, [metodologiasDeEnsenanzaService.metodologias[0]], true, []);
    actividad1.temas.push(unidad1.temas[0]);
    actividad1.temas.push(unidad1.temas[1]);
    clase2.actividades.push(actividad1);

    clase2.puntuacionDeClase = new PuntuacionDeClase();
    clase2.puntuacionDeClase.puntajeContenido = 4.0;
    clase2.puntuacionDeClase.puntajeEnsenanza = 4.0;
    clase2.puntuacionDeClase.puntajeRecursosUtilizados = 4.5;
    clase2.puntuacionDeClase.mensajes.push("La clase se desarrolla un poco lenta");

    materia.clases.push(clase2);

    const clase3 = new Clase(3, materia, new Date("04/20/2019"), TipoDeClase.PRESENCIAL);

    actividad1 = new Actividad(4, null, TipoDeActividad.EXAMEN, [metodologiasDeEnsenanzaService.metodologias[0]], true, []);
    actividad1.temas.push(unidad1.temas[0]);
    actividad1.temas.push(unidad1.temas[1]);
    clase3.actividades.push(actividad1);

    clase3.puntuacionDeClase = new PuntuacionDeClase();
    clase3.puntuacionDeClase.puntajeContenido = 3.0;
    clase3.puntuacionDeClase.puntajeEnsenanza = 4.0;
    clase3.puntuacionDeClase.puntajeRecursosUtilizados = 3.5;

    materia.clases.push(clase3);

    var clase = new Clase(4, materia, null, TipoDeClase.PRESENCIAL);
    actividad1 = new Actividad(5, null, TipoDeActividad.PRACTICA, [metodologiasDeEnsenanzaService.metodologias[2]], true, []);
    actividad1.temas.push(unidad1.temas[0]);
    actividad1.temas.push(unidad1.temas[1]);
    clase.actividades.push(actividad1);
    materia.clases.push(clase);

    clase = new Clase(5, materia, null, TipoDeClase.PRESENCIAL);
    materia.clases.push(clase);
    clase = new Clase(6, materia, null, TipoDeClase.PRESENCIAL);
    materia.clases.push(clase);
    clase = new Clase(7, materia, null, TipoDeClase.PRESENCIAL);
    materia.clases.push(clase);
    clase = new Clase(8, materia, null, TipoDeClase.PRESENCIAL);
    materia.clases.push(clase);
    clase = new Clase(9, materia, null, TipoDeClase.PRESENCIAL);
    materia.clases.push(clase);
    clase = new Clase(10, materia, null, TipoDeClase.PRESENCIAL);
    materia.clases.push(clase);

    this.materiaSeleccionada = this.materias[0];
  }

  getCantidadDeActividades() {
    var cantidad: Number = 0;
    this.materias.forEach((materia) => {
      materia.clases.forEach((clase) => {
        cantidad += clase.actividades.length;
      });
    });
    return cantidad;
  }

  getActividadPorId(actividadId: Number) {
    var actividadEncontrada: Actividad = null;
    this.materias.forEach((materia) => {
      materia.clases.forEach((clase) => {
        clase.actividades.forEach((actividad) => {
          if( actividad.id === actividadId ) {
            actividadEncontrada = actividad
          }
        })
      });
    });
    return actividadEncontrada;
  }

  getClasePorId(id: Number) {
    var claseEncontrada: Actividad = null;
    this.materias.forEach((materia) => {
      materia.clases.forEach((clase) => {
        if( clase.id === id ) {
          claseEncontrada = clase
        }
      });
    });
    return claseEncontrada;
  }

  getClaseDeActividad(actividad: Actividad) {
    var claseEncontrada: Actividad = null;
    this.materias.forEach((materia) => {
      materia.clases.forEach((clase) => {
        if(clase.actividades.indexOf(actividad) != -1) {
          claseEncontrada = clase;
        }
      });
    });
    return claseEncontrada;
  }
}
