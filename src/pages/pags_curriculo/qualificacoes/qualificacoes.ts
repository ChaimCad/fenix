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

  public nome_instituicao:string;
  public curso:string;
  public cor:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.nome_instituicao = this.navParams.get('param1');
    this.curso = this.navParams.get('param2');
    this.cor = this.navParams.get('param3');
  }

  ano: number;


  public RetornaAno() {
    var dNow = new Date();

    this.ano = dNow.getFullYear()
    //console.log(this.ano) 
  }

  public formulario: FormGroup = new FormGroup({
    'curso': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.pattern('[A-Za-zÀ-ú]*')]),
    'nome_instituicao': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[A-Za-zÀ-ú]*')]),
    'data_ano': new FormControl(null, [Validators.required]),
    'tipo_curso': new FormControl(null, [Validators.required]),
    'desc': new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[A-Za-zÀ-ú]*')]),
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
    if (name == 'nome_instituicao') {
      if (this.formulario.controls.nome_instituicao.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.nome_instituicao.valid || this.formulario.controls.nome_instituicao.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'tipo_curso') {
      if (this.formulario.controls.tipo_curso.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.tipo_curso.valid || this.formulario.controls.tipo_curso.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'data_ano') {
      if (this.formulario.controls.data_ano.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.data_ano.valid || this.formulario.controls.data_ano.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'desc') {
      if (this.formulario.controls.desc.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.desc.valid || this.formulario.controls.desc.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
  }


  goToPage6() {
    if (this.formulario.status != "INVALID") {

      this.navCtrl.push(InfoAddPage);
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
    if (this.cor == true){
      this.curso = this.formulario.value.curso;
      this.nome_instituicao = this.formulario.value.nome_instituicao;
      document.getElementById('lbl_nome_instituicao').style.color = '#32db64';
      document.getElementById('lbl_curso').style.color = '#32db64';
    }
  }

}
