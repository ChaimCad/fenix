import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { directive } from '@angular/core/src/render3/instructions';
import { AlertController } from 'ionic-angular';

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

  public cont = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaAtuacaoPage');
  }


  goToPage5(){
    this.navCtrl.push(QualificacoesPage);
  }


  cria(){
   this.cont++;
   //console.log(this.cont)
   if (this.cont==1){
     document.getElementById('sec1').style.display='unset';
   }
   if (this.cont==2){
    document.getElementById('sec2').style.display='unset';
  }

  if (this.cont > 2){
    const alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'Só é possível inserir três áreas de atuação e três cursos.',
      buttons: ['OK']
    });
    alert.present();
    
  }
    
  }

  

}
