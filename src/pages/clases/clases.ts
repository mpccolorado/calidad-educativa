import { Component, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { MateriasService } from '../../services/MateriasService';
import { PuntuacionDeClaseModal } from './puntuacionDeClaseModal/puntuacionDeClaseModal';
import { ClasePage } from '../clase/clasePage';
import { Clase } from '../../model/Clase';
import { Actividad } from '../../model/Actividad';
import { TipoDeClase } from '../../model/TipoDeClase';
import { TipoDeActividad } from '../../model/TipoDeActividad';
import { MetodologiasDeEnsenanzaService } from '../../services/MetodologiasDeEnsenanzaService';
import { ActividadDeClaseModal } from '../clase/actividadModal/actividadDeClaseModal';

@Component({
  selector: 'page-clases',
  templateUrl: 'clases.html'
})
export class ClasesPage {
  TipoDeClase = TipoDeClase;
  TipoDeActividad = TipoDeActividad;

  constructor(public navCtrl: NavController,
              private elRef: ElementRef,
              public metodologiasService: MetodologiasDeEnsenanzaService,
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

  }

  moverActividad($event: any) {
    var actividad: Actividad = $event.dragData;
    var claseOrigen: Clase = this.materiasService.getClaseDeActividad(actividad);
    var idClaseDestino = this.findParent($event.mouseEvent.target, "ion-card").dataset.claseId;
    var claseDestino: Clase = this.materiasService.getClasePorId(Number(idClaseDestino));

    if(claseDestino.fechaDeInicio == null) {
      claseDestino.actividades.push(actividad);
      var indexActividadClaseOrigen = claseOrigen.actividades.indexOf(actividad);
      claseOrigen.actividades.splice(indexActividadClaseOrigen, 1);
    }
  }

  agregarActividad(clase: Clase) {
    var idDeActividad = this.materiasService.getCantidadDeActividades(); //ToDo: temporal
    var nuevaActividad = new Actividad(idDeActividad, "", TipoDeActividad.TEORIA, [this.metodologiasService.metodologias[0]], false, []);
    let actividadDeClaseModal = this.modalCtrl.create(ActividadDeClaseModal, {
      actividad: nuevaActividad,
      materia: this.materiasService.materiaSeleccionada
    });
    actividadDeClaseModal.onDidDismiss((actividad: Actividad) => {
      if(actividad) {
        clase.actividades.push(actividad);
      }
    });
    actividadDeClaseModal.present();
  }

  modificarActividad(actividad: Actividad) {
    let actividadDeClaseModal = this.modalCtrl.create(ActividadDeClaseModal, {
      actividad: actividad,
      materia: this.materiasService.materiaSeleccionada
    });
    actividadDeClaseModal.onDidDismiss((actividad: Actividad) => {

    });
    actividadDeClaseModal.present();
  }

  eliminarActividad(actividad: Actividad) {
    var claseCorrespondiente = this.materiasService.getClaseDeActividad(actividad);
    var indexOfActividad = claseCorrespondiente.actividades.indexOf(actividad);
    claseCorrespondiente.actividades.splice(indexOfActividad, 1);
  }

  private findParent(element, localName) {
    if(element.localName === localName) {
      return element;
    }
    return this.findParent(element.parentElement, localName);
  }
}
