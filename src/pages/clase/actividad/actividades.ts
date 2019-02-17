import { Component, Input } from '@angular/core';
import { Actividad } from '../../../model/Actividad';

@Component({
  selector: 'actividades',
  templateUrl: 'actividades.html'
})
export class Actividades {
  @Input()
  actividades: Actividad[];

  constructor() { }
}
