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
    var x: number = 0;
    document.getElementById('botaofiltro').addEventListener('click', function() {
      if(x == 0) {
        document.getElementById("filter").style.display = "flex";
        for (let op = 0; op <= 1; op += 0.1) {
            setTimeout(function() {
              document.getElementById("filter").style.opacity = String(op);
            }, 100);
        }
        x = 1;
      }
      else {
        document.getElementById("filter").style.display = "none";
        document.getElementById("filter").style.opacity = "0";
        x = 0;
      }
    });
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
    'Recursos humanos'
  ];

  public areaI: Array<string> = [
    'Informática',
    'Administração',
    'Recursos humanos'
  ];
  
  public formulario_candidatos: FormGroup = new FormGroup({
    'idade' : new FormControl(null, [Validators.max(90)])
  });

  public Valida(name: string) {
    if (name == 'idade') {
      if (this.formulario_candidatos.controls.idade.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if(this.formulario_candidatos.controls.idade.value == null) {
        document.getElementById('lbl_'+ name).style.color='#999';
      }
      else if (!this.formulario_candidatos.controls.idade.valid || this.formulario_candidatos.controls.idade.touched) {
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
      }
    }
  }
}
