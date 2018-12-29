import { Component } from '@angular/core';

import { TemarioPage } from '../temario/temario';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TemarioPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
