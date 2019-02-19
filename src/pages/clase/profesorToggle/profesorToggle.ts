import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output()
  selectionToggled: EventEmitter<any>;

  constructor() {
    this.selectionToggled = new EventEmitter<any>();
  }

  toggleCheck() {
    this.checked = !this.checked;
    this.selectionToggled.next({profesor: this.profesor, checked: this.checked});
  }
}
