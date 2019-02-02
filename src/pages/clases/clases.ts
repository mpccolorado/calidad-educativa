import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { MateriasService } from '../../services/MateriasService';
import { PuntuacionDeClaseModal } from './puntuacionDeClaseModal/puntuacionDeClaseModal';
import { ClasePage } from '../clase/clasePage';

@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html'
})
export class ClasesPage {

  constructor(public navCtrl: NavController,
              public materiasService: MateriasService,
              public modalCtrl: ModalController) {
  }

  mostrarPuntuacionDeClase(clase) {
    let puntuacionDeClaseModal = this.modalCtrl.create(PuntuacionDeClaseModal, clase);
    puntuacionDeClaseModal.present();
  }

  planificarProximaClase() {
    this.navCtrl.push(ClasePage, { materia: this.materiasService.materiaSeleccionada })
  }

}
