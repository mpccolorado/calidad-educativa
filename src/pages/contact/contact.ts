import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MetodologiasDeEnsenanzaService } from '../../services/MetodologiasDeEnsenanzaService';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public metodologiasDeEnsenanzaService: MetodologiasDeEnsenanzaService) {

  }

}
