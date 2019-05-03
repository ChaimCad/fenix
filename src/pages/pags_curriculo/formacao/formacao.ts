import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { AreaAtuacaoPage } from '../area-atuacao/area-atuacao';

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
    'escolaridade': new FormControl(null),
    'nome_inst': new FormControl(null),
    'ano': new FormControl(null)
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
    
    this.navCtrl.push(AreaAtuacaoPage);
  }
}
