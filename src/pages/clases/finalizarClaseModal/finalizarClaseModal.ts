import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Clase } from '../../../model/Clase';

@Component({
  selector: 'finalizar-clase-modal',
  templateUrl: 'finalizar-clase-modal.html'
})
export class FinalizarClaseModal {
  clase: Clase;
  claseAuxiliar: Clase;

  constructor(public viewCtrl: ViewController) {
    this.clase = this.viewCtrl.data.clase;
    this.claseAuxiliar = Object.assign({}, this.clase);
  }

  aceptar() {
    Object.assign(this.clase, this.claseAuxiliar);
    this.viewCtrl.dismiss(this.clase);
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }
}
