import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the InfoAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-add',
  templateUrl: 'info-add.html',
})
export class InfoAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoAddPage');
  }

  public formulario_infoadd:FormGroup = new FormGroup({
    'experiencia' :  new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(300)])
  })

  public salvar(){
    if (this.formulario_infoadd.status != "INVALID") {
      let alert1 = this.alertCtrl.create({
        title: 'Sucesso!',
        subTitle: 'Seu currículo foi realizado com sucesso.',
        buttons: ['Ok']
      });
      alert1.present();
      
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Preencha no mínimo 10 e no máximo 300 caracteres.',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

}
