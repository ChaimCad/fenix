import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Generated class for the DadosPessoaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html',
})
export class DadosPessoaisPage {

  public data:any; mes:any; ano:number; min_idade:string; max_idade:string

  public RetornaDataAtual(){
    var dNow = new Date();
    
   
    if (dNow.getDate() < 10){
      this.data = '0' + dNow.getDate()
      //console.log(this.data)
    }
    else
    {
      this.data = dNow.getDate()
      //return data
    }

    if (dNow.getMonth() < 10){
      this.mes = '0' + (dNow.getMonth()+1)
      //mes+=1
      //console.log(this.mes)
    }
    else
    {
      this.mes = dNow.getMonth()
      //return mes
    }
    this.ano = dNow.getFullYear()
    //console.log(this.ano)

    //var localdate = data + '-' + mes + '-' + ano;
     this.min_idade = ((this.ano-18) + '-' + this.mes + '-' + this.data).toString();
    //console.log(this.min_idade)
    //return this.min_idade
    this.max_idade = ((this.ano-90) + '-' + this.mes + '-' + this.data).toString();
    //console.log(this.max_idade)
    //return this.max_idade
   // min_idade.toString()
   // max_idade.toString()
    //console.log(min_idade)
   // console.log(localdate)
    
  }

  public formulario:FormGroup = new FormGroup({
    'nome' : new FormControl(null)

  })

  public estado_civil: Array<string> = [
    'Solteiro(a)',
    'Casado(a)',
    'Divorciado(a)',
    'Viúvo(a)',
    'Separado(a)'
  ]

  public sexo = [
    'Masculino',
    'Feminino',
    'Outro'
  ]

  public filho:Array<string> = ['0','1','2','3','4+']
  
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosPessoaisPage');
    this.RetornaDataAtual()
  }

}
