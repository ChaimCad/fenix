import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaAtuacaoPage } from '../area-atuacao/area-atuacao';
import { QualificacoesPage } from '../qualificacoes/qualificacoes';

/**
 * Generated class for the FormacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formacao',
  templateUrl: 'formacao.html',
})
export class FormacaoPage {
  ano: number;
  mes: number;
  alertCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public RetornaAno(){
    var dNow = new Date();
    
  
      this.mes = dNow.getMonth()
      //return mes
    
    this.ano = dNow.getFullYear()
    //console.log(this.ano) 
  }


  public formulario:FormGroup = new FormGroup({
    'escolaridade': new FormControl(null, [Validators.required]),
    'nome_inst': new FormControl(null,[Validators.required, Validators.minLength(4), Validators.maxLength(30), Validators.pattern('[A-Za-zÀ-ú]*')]),
    'ano': new FormControl(null, [Validators.required])
  })


  public escolaridade: Array<string> = [
    'Analfabeto(a)',
    'Ensino Fundamental Incompleto',
    'Ensino Fundamental Completo',
    'Ensino Médio Incompleto',
    'Ensino Médio Completo',
    'Ensino Técnico',
    'Ensino Superior'
  ]

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormacaoPage');
  }
  
  goToPage4(){
    if (this.formulario.invalid != true){
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
  }}
