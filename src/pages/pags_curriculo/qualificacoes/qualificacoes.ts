import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoAddPage } from '../info-add/info-add';

/**
 * Generated class for the QualificacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qualificacoes',
  templateUrl: 'qualificacoes.html',
})
export class QualificacoesPage {
  //alertCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ano: number;


  public RetornaAno() {
    var dNow = new Date();

    this.ano = dNow.getFullYear()
    //console.log(this.ano) 
  }

  public formulario: FormGroup = new FormGroup({
    'curso': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-zÀ-ú]*')]),
    'nome_inst': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'ano': new FormControl(null, [Validators.required]),
    'tipo_curso': new FormControl(null, [Validators.required]),
    'desc': new FormControl(null, [Validators.required, Validators.pattern('[A-Za-zÀ-ú]*')]),
  })

  public tipo_curso: Array<string> = [
    'Técnico',
    'Graduação',
    'Pós-graduação',
    'Mestrado',
    'Doutorado',
    'Outros'
  ]

  public Validacoes(name: string) {
    if (name == 'curso') {
      if (this.formulario.controls.curso.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.curso.valid || this.formulario.controls.curso.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'nome_inst') {
      if (this.formulario.controls.nome_inst.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.nome_inst.valid || this.formulario.controls.nome_inst.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }

    if (name == 'ano') {
      if (this.formulario.controls.ano.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.ano.valid || this.formulario.controls.ano.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'tipo_curso') {
      if (this.formulario.controls.tipo_curso.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.tipo_curso.valid || this.formulario.controls.tipo_curso.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'desc') {
      if (this.formulario.controls.desc.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.desc.valid || this.formulario.controls.desc.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificacoesPage');
  }

  goToPage6() {
    if (this.formulario.status != "INVALID") {
      this.navCtrl.push(InfoAddPage);
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Preencha todos os campos corretamente.',
        buttons: ['Ok']
      });
      alert.present();
    }
  }
}