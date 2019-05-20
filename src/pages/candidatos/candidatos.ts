import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the CandidatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidatos',
  templateUrl: 'candidatos.html',
})
export class CandidatosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CandidatosPage');
  }

  public sexo: Array<string> = [
    'Masculino',
    'Feminino',
    'Outro'
  ];

  public escolaridade: Array<string> = [
    'Analfabeto(a)',
    'Ensino Fundamental Incompleto',
    'Ensino Fundamental Completo',
    'Ensino Médio Incompleto',
    'Ensino Médio Completo',
    'Ensino Técnico',
    'Ensino Superior'
  ]
  
}
