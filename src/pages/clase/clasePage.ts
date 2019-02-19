import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { TipoDeClase } from '../../model/TipoDeClase';
import { ActividadDeClaseModal } from './actividadModal/actividadDeClaseModal';
import { Actividad } from '../../model/Actividad';
import { TipoDeActividad } from "../../model/TipoDeActividad";
import { MetodologiasDeEnsenanzaService } from '../../services/MetodologiasDeEnsenanzaService';
import { MateriasService } from '../../services/MateriasService';
import { Clase } from '../../model/Clase';

@Component({
  selector: 'page-clase',
  templateUrl: 'clasePage.html'
})
export class ClasePage {
  materia: Materia;
  clase: Clase;
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
    this.clase = this.navParams.get('clase');
    this.materia = this.clase.materia;
    this.actividades = this.clase.actividades;
  }

  ionViewDidEnter() {
    if(this.actividades.length == 0) {
      this.agregarActividad();
    }
  }

  agregarActividad() {
    var idDeActividad = this.materiasService.getCantidadDeActividades(); //ToDo: temporal
    var nuevaActividad = new Actividad(idDeActividad, "", TipoDeActividad.TEORIA, [this.metodologiasService.metodologias[0]], false, []);
    let actividadDeClaseModal = this.modalCtrl.create(ActividadDeClaseModal, {
      actividad: nuevaActividad,
      materia: this.materia
    });
    actividadDeClaseModal.onDidDismiss((actividad: Actividad) => {
      if(actividad) {
        this.actividades.push(actividad);
      }
    });
    actividadDeClaseModal.present();
  }

  modificarActividad(actividad: Actividad) {
    let actividadDeClaseModal = this.modalCtrl.create(ActividadDeClaseModal, {
      actividad: actividad,
      materia: this.materia
    });
    actividadDeClaseModal.onDidDismiss((actividad: Actividad) => {

    });
    actividadDeClaseModal.present();
  }

}
