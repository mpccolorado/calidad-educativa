import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular';
import { Actividad } from '../../../model/Actividad';
import { TipoDeActividad } from '../../../model/TipoDeActividad';
import { MateriasService } from '../../../services/MateriasService';
import { Tema } from '../../../model/Tema';
import { SeleccionDeTemasModal } from './temasModal/seleccionDeTemasModal';
import { MetodologiaDeEnsenanza } from '../../../model/MetodologiaDeEnsenanza';
import { MetodologiasDeEnsenanzaService } from '../../../services/MetodologiasDeEnsenanzaService';

@Component({
  selector: 'actividad-de-clase-modal',
  templateUrl: 'actividad-de-clase-modal.html'
})
export class ActividadDeClaseModal {
  actividad: Actividad;
  actividadAuxiliar: Actividad;
  grupal: boolean;
  descripcion: string;
  tipoDeActividadSeleccionada: TipoDeActividad;
  metodologiasSeleccionadas: MetodologiaDeEnsenanza[];
  TipoDeActividad = TipoDeActividad;
  temas: Tema[];

  constructor(public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public metodologiasService: MetodologiasDeEnsenanzaService,
              public materiasService: MateriasService) {
    this.actividad = this.viewCtrl.data.actividad;
    this.actividadAuxiliar = Object.assign({}, this.actividad);
    this.tipoDeActividadSeleccionada = TipoDeActividad.TEORIA;
    this.temas = [];
    this.metodologiasSeleccionadas = [metodologiasService.metodologias[0]];
    this.grupal = false;
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
    var indexOfTema = this.temas.indexOf(tema);
    this.temas.splice(indexOfTema, 1);
  }

  aceptar() {
    this.actividadAuxiliar.descripcion = this.descripcion;
    this.actividadAuxiliar.tipoDeActividad = this.tipoDeActividadSeleccionada;
    this.actividadAuxiliar.grupal = this.grupal;
    this.actividadAuxiliar.temas = this.temas;
    this.actividadAuxiliar.metodologiasDeEnsenanza = this.metodologiasSeleccionadas;

    Object.assign(this.actividad, this.actividadAuxiliar);
    this.viewCtrl.dismiss(this.actividad);
  }

  cancelar() {
    this.viewCtrl.dismiss();
  }
}
