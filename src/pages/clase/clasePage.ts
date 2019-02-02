import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { TipoDeClase } from '../../model/TipoDeClase';
import { ActividadDeClaseModal } from './actividadModal/actividadDeClaseModal';
import { Actividad } from '../../model/Actividad';
import { TipoDeActividad } from "../../model/TipoDeActividad";
import { MetodologiasDeEnsenanzaService } from '../../services/MetodologiasDeEnsenanzaService';
import { MateriasService } from '../../services/MateriasService';

@Component({
  selector: 'page-clase',
  templateUrl: 'clasePage.html'
})
export class ClasePage {
  materia: Materia;
  TipoDeClase = TipoDeClase;
  TipoDeActividad = TipoDeActividad;
  tipoDeClaseSeleccionado: TipoDeClase = TipoDeClase.PRESENCIAL;
  fechaDeInicio: Date;
  fechaDeFin: Date;
  actividades: Actividad[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public metodologiasService: MetodologiasDeEnsenanzaService,
              public materiasService: MateriasService,
              public modalCtrl: ModalController) {
    this.materia = this.navParams.get('materia');
    this.actividades = [];
  }

  agregarActividad() {
    var nuevaActividad = new Actividad("", TipoDeActividad.TEORIA, [this.metodologiasService.metodologias[0]], false);
    let actividadDeClaseModal = this.modalCtrl.create(ActividadDeClaseModal, {
      actividad: nuevaActividad
    });
    actividadDeClaseModal.onDidDismiss((actividad: Actividad) => {
      if(actividad) {
        this.actividades.push(actividad);
      }
    });
    actividadDeClaseModal.present();
  }

}
