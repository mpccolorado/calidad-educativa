import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-puntuacion',
  templateUrl: 'item-puntuacion.html'
})
export class ItemPuntuacion {
  @Input()
  valor: number;
  @Input()
  nombre: string;

  constructor() {
  }
}
