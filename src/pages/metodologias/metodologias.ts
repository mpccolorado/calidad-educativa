import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MetodologiasDeEnsenanzaService } from '../../services/MetodologiasDeEnsenanzaService';

@Component({
  selector: 'page-metodologias',
  templateUrl: 'metodologias.html'
})
export class MetodologiasPage {

  constructor(public navCtrl: NavController,
              public metodologiasDeEnsenanzaService: MetodologiasDeEnsenanzaService) {

  }

}
