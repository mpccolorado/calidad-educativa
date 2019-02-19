import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { Actividad } from '../../../model/Actividad';
import { TipoDeActividad } from '../../../model/TipoDeActividad';
import { MateriasService } from '../../../services/MateriasService';
import { Tema } from '../../../model/Tema';
import { SeleccionDeTemasModal } from './temasModal/seleccionDeTemasModal';
import { MetodologiaDeEnsenanza } from '../../../model/MetodologiaDeEnsenanza';
import { MetodologiasDeEnsenanzaService } from '../../../services/MetodologiasDeEnsenanzaService';
import { Materia } from '../../../model/Materia';

@Component({
  selector: 'actividad-de-clase-modal',
  templateUrl: 'actividad-de-clase-modal.html'
})
export class ActividadDeClaseModal {
  materia: Materia;
  actividad: Actividad;
  actividadAuxiliar: Actividad;
  TipoDeActividad = TipoDeActividad;

  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public metodologiasService: MetodologiasDeEnsenanzaService,
              public materiasService: MateriasService) {
    this.actividad = this.viewCtrl.data.actividad;
    this.materia = this.viewCtrl.data.materia;
    this.actividadAuxiliar = Object.assign({}, this.actividad);
    this.tipoDeActividadSeleccionada = TipoDeActividad.TEORIA;
  }

  seleccionarTemas() {
    let seleccionDeTemasModal = this.modalCtrl.create(SeleccionDeTemasModal, {
      temas: this.temas
    });
    seleccionDeTemasModal.onDidDismiss((temas: Tema[]) => {
      console.log(temas);
    });
    seleccionDeTemasModal.present();
  }

  quitarTema(tema) {
    var indexOfTema = this.actividadAuxiliar.temas.indexOf(tema);
    this.actividadAuxiliar.temas.splice(indexOfTema, 1);
  }

  aceptar() {
    Object.assign(this.actividad, this.actividadAuxiliar);
    this.viewCtrl.dismiss(this.actividad);
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }
}
