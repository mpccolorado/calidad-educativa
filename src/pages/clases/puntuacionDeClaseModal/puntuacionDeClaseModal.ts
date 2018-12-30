import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Clase } from '../../../model/Clase';

@Component({
  selector: 'puntuacion-de-clase-modal',
  templateUrl: 'puntuacion-de-clase-modal.html'
})
export class PuntuacionDeClaseModal {
  clase: Clase;
  claseAuxiliar: Clase;

  constructor(public viewCtrl: ViewController) {
    this.clase = this.viewCtrl.data;
    this.claseAuxiliar = Object.assign({}, this.clase);
  }

  aceptar() {
    Object.assign(this.clase, this.claseAuxiliar);
    this.viewCtrl.dismiss(this.clase);
  }
}
