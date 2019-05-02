import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';

/**
 * Generated class for the Curriculo1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curriculo1',
  templateUrl: 'curriculo1.html',
})
export class Curriculo1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Curriculo1Page');
  }

  goToPage1(){
    this.navCtrl.push(DadosPessoaisPage)
  }

}
