import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { TipoDeClase } from '../../model/TipoDeClase';

@Component({
  selector: 'page-clase',
  templateUrl: 'clasePage.html'
})
export class ClasePage {
  materiaSeleccionada: Materia;
  TipoDeClase = TipoDeClase;
  tipoDeClaseSeleccionado: TipoDeClase = TipoDeClase.PRESENCIAL;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController) {
    this.materiaSeleccionada = this.navParams.get('materiaSeleccionada')
  }

}
