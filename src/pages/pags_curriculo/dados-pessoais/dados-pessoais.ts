import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoPage } from '../endereco/endereco';
import { DadosPessoaisModel } from '../dados-pessoais/dados-pessoais-model';

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

  public data:any; mes:any; ano:number; min_idade:string; max_idade:string;

  public nome:string; public sobrenome:string; public sexo1:string; 
        public email:string; public telefone:string; public celular:string;
        public estado_civil1:string; public filhos1:string; public data_nasc:string

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

    
    this.min_idade = ((this.ano-18) + '-' + this.mes + '-' + this.data).toString();
   
    this.max_idade = ((this.ano-90) + '-' + this.mes + '-' + this.data).toString();
   
    
  }



  public formulario:FormGroup = new FormGroup({
    'nome' : new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    'sexo': new FormControl(null),
    'email': new FormControl(null),
    'telefone': new FormControl(null),
    'celular': new FormControl(null),
    'estado_civil': new FormControl(null),
    'filhos': new FormControl(null),
    'data_nasc': new FormControl(null)
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

  /*public Valida(event:any){
    this.nome = (<HTMLInputElement>event.target).value;
    if (this.nome.length < 3 ){

    }
    if (this.nome. == "   ")

  }*/

  goToPage2(){
    console.log(this.formulario.controls.nome)
    this.navCtrl.push(EnderecoPage);
  }

  public filho:Array<string> = ['0','1','2','3','4+'];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosPessoaisPage');
    this.RetornaDataAtual()
    //this.formulario;
  }

}
