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
  ];

  public areaA: Array<string> = [
    'Informática',
    'Administração',
    'Recursos humanos',
  ];

  public areaI: Array<string> = [
    'Informática',
    'Administração',
    'Recursos humanos',
  ];
  
  public formulario_candidatos: FormGroup = new FormGroup({
    'idade' : new FormControl(null, [Validators.max(90), Validators.pattern('[0-9]')])
  });

  public Valida(name:string) {
    if (name == 'idade') {
      if (this.formulario_candidatos.controls.idade.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_candidatos.controls.idade.valid || this.formulario_candidatos.controls.idade.touched) {
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
      }
    }
  }
}
