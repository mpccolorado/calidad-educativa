import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Unidad } from '../../../model/Unidad';

@Component({
  selector: 'unidad-modal',
  templateUrl: 'unidad-modal.html'
})
export class UnidadModal {
  unidad: Unidad;
  unidadAuxiliar: Unidad;

  constructor(public viewCtrl: ViewController) {
    this.unidad = this.viewCtrl.data;
    this.unidadAuxiliar = Object.assign({}, this.unidad);
  }

  aceptar() {
    Object.assign(this.unidad, this.unidadAuxiliar);
    this.viewCtrl.dismiss(this.unidad);
  }
}
