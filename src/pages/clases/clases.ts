import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { MateriasService } from '../../services/MateriasService';
import { PuntuacionDeClaseModal } from './puntuacionDeClaseModal/puntuacionDeClaseModal';
import { ClasePage } from '../clase/clasePage';
import { Clase } from '../../model/Clase';
import { FinalizarClaseModal } from './finalizarClaseModal/finalizarClaseModal';

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

  planificarClase(clase: Clase) {
    this.navCtrl.push(ClasePage, { clase: clase })
  }

  finalizarClase(clase: Clase) {
    let finalizacionDeClaseModal = this.modalCtrl.create(FinalizarClaseModal, {clase: clase});
    finalizacionDeClaseModal.present();
  }

}
