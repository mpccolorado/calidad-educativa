import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { MateriasService } from '../../../../services/MateriasService';
import { Tema } from '../../../../model/Tema';

@Component({
  selector: 'seleccion-de-temas-modal',
  templateUrl: 'seleccion-de-temas-modal.html'
})
export class SeleccionDeTemasModal {
  temas: Tema[];

  constructor(public viewCtrl: ViewController,
              public materiasService: MateriasService) {
    this.temas = this.viewCtrl.data.temas;
  }

  toggleSeleccionDeTema(tema) {
    var indexOfTema = this.temas.indexOf(tema);
    if(indexOfTema != -1) {
      this.temas.splice(indexOfTema, 1)
    } else {
      this.temas.push(tema);
    }
  }

  aceptar() {
    Object.assign(this.temas, this.temas);
    this.viewCtrl.dismiss(this.temas);
  }
}
