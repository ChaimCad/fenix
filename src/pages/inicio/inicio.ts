import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { SideMenuPage } from '../side-menu/side-menu';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioPage');
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  goToSideMenuPagePage(){
    this.navCtrl.setRoot(SideMenuPage);
  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }

}
