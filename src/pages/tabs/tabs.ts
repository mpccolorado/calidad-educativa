import { Component } from '@angular/core';

import { ClasesPage } from '../clases/clases';
import { TemarioPage } from "../temario/temario";
import { MetodologiasPage } from '../metodologias/metodologias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TemarioPage;
  tab2Root = ClasesPage;
  tab3Root = MetodologiasPage;

  constructor() {

  }
}
