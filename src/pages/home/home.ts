import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Materia } from '../../model/Materia';
import { Unidad } from '../../model/Unidad';
import { Tema } from '../../model/Tema';
import { MateriasService } from '../../services/MateriasService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  materiaSeleccionada: Materia;

  constructor(public navCtrl: NavController,
              public materiasService: MateriasService) {
    this.materiaSeleccionada = materiasService.materias[0];
  }

  toggleUnidad(unidad) {
    unidad.mostrar = !unidad.mostrar;
  }

}
