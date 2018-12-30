import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { MateriasService } from '../../services/MateriasService';
import { UnidadModal } from './unidadModal/unidadModal';
import { Unidad } from '../../model/Unidad';
import { Tema } from '../../model/Tema';
import { TemaModal } from './temaModal/temaModal';

@Component({
  selector: 'page-temario',
  templateUrl: 'temario.html'
})
export class TemarioPage {
  materiaSeleccionada: Materia;

  constructor(public navCtrl: NavController,
              public materiasService: MateriasService,
              public modalCtrl: ModalController) {
    this.materiaSeleccionada = materiasService.materias[0];
  }

  toggleUnidad(unidad) {
    unidad.mostrar = !unidad.mostrar;
  }

  agregarUnidad() {
    let unidadModal = this.modalCtrl.create(UnidadModal, new Unidad(""));
    unidadModal.onDidDismiss((nuevaUnidad: Unidad) => {
      this.materiaSeleccionada.unidades.push(nuevaUnidad);
    });
    unidadModal.present();
  }

  editarUnidad(unidad: Unidad) {
    let unidadModal = this.modalCtrl.create(UnidadModal, unidad);
    unidadModal.present();
  }

  agregarTema(unidad) {
    let temaModal = this.modalCtrl.create(TemaModal, new Tema("", ""));
    temaModal.onDidDismiss((nuevoTema: Tema) => {
      unidad.temas.push(nuevoTema);
    });
    temaModal.present();
  }

  editarTema(tema: Tema) {
    let temaModal = this.modalCtrl.create(TemaModal, tema);
    temaModal.present();
  }

}
