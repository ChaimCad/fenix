import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { InicioPage } from '../inicio/inicio';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage {

  //email ="usuario ricardo da silva";

  rootPage = TabsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }

  goToInicioPage(){
    this.navCtrl.setRoot(InicioPage);
  }

}
