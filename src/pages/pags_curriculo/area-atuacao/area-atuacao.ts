import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { directive } from '@angular/core/src/render3/instructions';
import { AlertController } from 'ionic-angular';

import { QualificacoesPage } from '../qualificacoes/qualificacoes';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  public formulario_atuacao:FormGroup = new FormGroup({
    'area1' : new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'area2': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50)]),
    'area3': new FormControl(null),
    'curso1': new FormControl(null),
    'curso2': new FormControl(null, [Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'curso3': new FormControl(null, [ Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')])
  
  })

  goToPage5(){
    if (this.formulario_atuacao.invalid != true){
      this.navCtrl.push(QualificacoesPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Preencha todos os campos corretamente.',
        buttons: ['Ok']
      });
      alert.present();
    }
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
