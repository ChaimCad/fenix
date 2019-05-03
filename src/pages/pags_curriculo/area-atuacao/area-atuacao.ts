import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QualificacoesPage } from '../qualificacoes/qualificacoes';

/**
 * Generated class for the AreaAtuacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-atuacao',
  templateUrl: 'area-atuacao.html',
})
export class AreaAtuacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaAtuacaoPage');
  }

  goToPage5(){

    this.navCtrl.push(QualificacoesPage);
  }

}
