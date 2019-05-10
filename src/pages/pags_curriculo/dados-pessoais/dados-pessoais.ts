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

  public formulario_dadospessoais:FormGroup = new FormGroup({
    'nome' : new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'sobrenome': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'sexo': new FormControl(null, [Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    'telefone': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('[0-9]+')]),
    'celular': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[0-9]+')]),
    'estado_civil': new FormControl(null, [Validators.required]),
    'filhos': new FormControl(null, [Validators.required]),
    'data_nasc': new FormControl(null, [Validators.required])
  })

  public Valida(name:string){
    if (name == 'nome'){
      if (this.formulario_dadospessoais.controls.nome.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.nome.valid || this.formulario_dadospessoais.controls.nome.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'sobrenome'){
      if (this.formulario_dadospessoais.controls.sobrenome.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.sobrenome.valid || this.formulario_dadospessoais.controls.sobrenome.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'sexo'){
      if (this.formulario_dadospessoais.controls.sexo.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.sexo.valid || this.formulario_dadospessoais.controls.sexo.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'email'){
      if (this.formulario_dadospessoais.controls.email.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.email.valid || this.formulario_dadospessoais.controls.email.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'telefone'){
      if (this.formulario_dadospessoais.controls.telefone.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.telefone.valid || this.formulario_dadospessoais.controls.telefone.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'celular'){
      if (this.formulario_dadospessoais.controls.celular.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.celular.valid || this.formulario_dadospessoais.controls.celular.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'estado_civil'){
      if (this.formulario_dadospessoais.controls.estado_civil.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.estado_civil.valid || this.formulario_dadospessoais.controls.estado_civil.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'filhos'){
      if (this.formulario_dadospessoais.controls.filhos.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.filhos.valid || this.formulario_dadospessoais.controls.filhos.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'data_nasc'){
      if (this.formulario_dadospessoais.controls.data_nasc.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_dadospessoais.controls.data_nasc.valid || this.formulario_dadospessoais.controls.data_nasc.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    
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

  public filho:Array<string> = ['0','1','2','3','4+'];


  goToPage2(){
    if (this.formulario_dadospessoais.status != "INVALID"){
      this.navCtrl.push(EnderecoPage);
    }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'Preencha todos os campos corretamente. Todos os campos são obrigatórios!',
        buttons: ['Ok']
      });
      alert.present();
    }
  }

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DadosPessoaisPage');
    this.RetornaDataAtual()
  }

}
