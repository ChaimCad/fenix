import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CurriculoPage } from '../curriculo/curriculo';
import { SideMenuPage } from '../side-menu/side-menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 

  tab1Root = HomePage;
  //tab1Root = SideMenuPage;
  tab2Root = AboutPage;
  tab4Root = CurriculoPage;

  constructor() {

  }
}
