import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Tema } from '../../../model/Tema';

@Component({
  selector: 'tema-modal',
  templateUrl: 'tema-modal.html'
})
export class TemaModal {
  tema: Tema;
  temaAuxiliar: Tema;

  constructor(public viewCtrl: ViewController) {
    this.tema = this.viewCtrl.data;
    this.temaAuxiliar = Object.assign({}, this.tema);
  }

  aceptar() {
    Object.assign(this.tema, this.temaAuxiliar);
    this.viewCtrl.dismiss(this.tema);
  }
}
