import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { MateriasService } from '../../services/MateriasService';

@Component({
  selector: 'page-temario',
  templateUrl: 'temario.html'
})
export class TemarioPage {
  materiaSeleccionada: Materia;

  constructor(public navCtrl: NavController,
              public materiasService: MateriasService) {
    this.materiaSeleccionada = materiasService.materias[0];
  }

}
