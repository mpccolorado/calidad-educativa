import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Actividad } from '../../../model/Actividad';

@Component({
  selector: 'actividades',
  templateUrl: 'actividades.html'
})
export class Actividades {
  @Input()
  puedenModificarse: boolean;
  @Input()
  actividades: Actividad[];
  @Output()
  modificarActividad = new EventEmitter();
  @Output()
  eliminarActividad = new EventEmitter();

  constructor() { }
}
