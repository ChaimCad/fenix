import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnderecoPage } from '../endereco/endereco';
import { AlertController } from 'ionic-angular';

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

  //public nome:string; public sobrenome:string; public sexo1:string; 
      //  public email:string; public telefone:string; public celular:string;
       // public estado_civil1:string; public filhos1:string; public data_nasc:string

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

  public valida_nome:boolean = false;



  public formulario:FormGroup = new FormGroup({
    'nome' : new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[A-Za-zÀ-ú]*')]),
    'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    'sexo': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    'telefone': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$")]),
    'celular': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    'estado_civil': new FormControl(null, [Validators.required]),
    'filhos': new FormControl(null, [Validators.required]),
    'data_nasc': new FormControl(null, [Validators.required])
  })

  public Valida_nome(){
    //this.formulario.value.nome = (<HTMLInputElement>event.target).value
    if (this.formulario.controls.nome.valid)
      document.getElementById('lbl_nome').style.color='#32db64';
    else if (!this.formulario.controls.nome.valid || this.formulario.controls.nome.touched)
    document.getElementById('lbl_nome').style.color='#f53d3d';
  }
  public Valida_sobrenome(){
    if (this.formulario.controls.sobrenome.valid)
      document.getElementById('lbl_sobrenome').style.color='#32db64';
    else if (!this.formulario.controls.sobrenome.valid || this.formulario.controls.sobrenome.touched)
    document.getElementById('lbl_sobrenome').style.color='#f53d3d';
  }
  public Valida_sexo(){
    if (this.formulario.controls.sexo.valid)
      document.getElementById('lbl_sexo').style.color='#32db64';
    else if (!this.formulario.controls.sexo.valid || this.formulario.controls.sexo.touched)
    document.getElementById('lbl_sexo').style.color='#f53d3d';
  }


  
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
    if (this.formulario.controls.nome.valid && this.formulario.controls.sobrenome.valid
      && this.formulario.controls.sexo.valid && this.formulario.controls.email.valid
      && this.formulario.controls.telefone.valid && this.formulario.controls.celular.valid 
      && this.formulario.controls.estado_civil.valid && this.formulario.controls.filhos.valid 
      && this.formulario.controls.data_nasc.valid){

      this.navCtrl.push(EnderecoPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Preencha todos os campos corretamente',
        buttons: ['Ok']
      });
      alert.present();
    }
    console.log(this.formulario.controls.sexo)
    
  }

  public filho:Array<string> = ['0','1','2','3','4+'];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosPessoaisPage');
    this.RetornaDataAtual()
    //this.Valida()
    //this.formulario;
  }

}
