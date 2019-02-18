import { Component, Input } from '@angular/core';
import { Profesor } from '../../../model/Profesor';

@Component({
  selector: 'profesor-toggle',
  templateUrl: 'profesor-toggle.html'
})
export class ProfesorToggle {
  @Input()
  profesor: Profesor;
  @Input()
  checked: boolean;

  constructor() { }

  toggleCheck() {
    this.checked = !this.checked;
  }
}
