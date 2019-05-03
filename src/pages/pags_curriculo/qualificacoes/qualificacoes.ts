import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ano: number;
  mes: number;
  
  public RetornaAno(){
    var dNow = new Date();
    
  
      this.mes = dNow.getMonth()
      //return mes
    
    this.ano = dNow.getFullYear()
    //console.log(this.ano) 
  }

  public formulario:FormGroup = new FormGroup({
    'curso': new FormControl(null),
    'nome_inst': new FormControl(null),
    'ano': new FormControl(null),
    'tipo_curs':new FormControl(null),
    'desc':new FormControl(null)
  })

  public tipo_curs: Array<string> = [
    'Graduação',
    'Pós-graduação',
    'Técnico',
    'Mestrado',
    'Doutorado',
    'Outros'
  ]




  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificacoesPage');
  }

}
