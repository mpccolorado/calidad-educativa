import { Component, Input } from '@angular/core';
import { Actividad } from '../../../model/Actividad';

@Component({
  selector: 'seleccion-de-actividades',
  templateUrl: 'seleccion-de-actividades.html'
})
export class SeleccionDeActividades {
  @Input()
  actividades: Actividad[];

  constructor() { }

  toggleSeleccionDeTema(actividad, tema) {
    var indexOfTema = actividad.temas.indexOf(tema);
    if(indexOfTema != -1) {
      // ToDo: indicar que la actividad se realizó o no
    }
  }
}
