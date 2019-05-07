import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  alertCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ano: number;
  mes: number;

  public RetornaAno() {
    var dNow = new Date();

    this.mes = dNow.getMonth()
    //return mes

    this.ano = dNow.getFullYear()
    //console.log(this.ano) 
  }

  public formulario: FormGroup = new FormGroup({
    'curso': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-zÀ-ú]*')]),
    'nome_inst': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[A-Za-zÀ-ú]*')]),
    'ano': new FormControl(null, [Validators.required]),
    'tipo_curs': new FormControl(null, [Validators.required]),
    'desc': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[A-Za-zÀ-ú]*')]),
  })

  public tipo_curs: Array<string> = [
    'Graduação',
    'Pós-graduação',
    'Técnico',
    'Mestrado',
    'Doutorado',
    'Outros'
  ]

  public Validaçoes(name: string) {
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
    if (name == 'tipo_curs') {
      if (this.formulario.controls.tipo_curs.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.tipo_curs.valid || this.formulario.controls.tipo_curs.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'desc') {
      if (this.formulario.controls.desc.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.desc.valid || this.formulario.controls.desc.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
  }


  goToPage5() {
    if (this.formulario.status != "INVALID") {

      this.navCtrl.push(QualificacoesPage);
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Preencha todos os campos corretamente. Todos os campos são obrigatórios!',
        buttons: ['Ok']
      });
      alert.present();
    }


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificacoesPage');
  }

}
