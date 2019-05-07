import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiCepProvider } from '../../../providers/api-cep/api-cep';
import { Endereco } from '../endereco/endereco-model'

import { AreaAtuacaoPage } from '../area-atuacao/area-atuacao';
import { FormacaoPage } from '../formacao/formacao';
import { QualificacoesPage } from '../qualificacoes/qualificacoes';
import { FormGroup, FormControl, Validators } from '@angular/forms';



/**
 * Generated class for the EnderecoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-endereco',
  templateUrl: 'endereco.html',
})
export class EnderecoPage {

  public lista_cep:Array<any> = new Array();

  public cep:string;

  public formulario_endereco:FormGroup = new FormGroup({
    'cep' : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('[0-9]+')]),
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(50)]),
    'numero': new FormControl(null, [Validators.required]),
    'complemento': new FormControl(null),
    'bairro': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'pais': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'cidade': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'uf': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)])
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerCEP:ApiCepProvider, public alertCtrl:AlertController) {
  }

  public Valida(name:string){
    if (name == 'cep'){
      if (this.formulario_endereco.controls.cep.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.cep.valid || this.formulario_endereco.controls.cep.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'endereco'){
      if (this.formulario_endereco.controls.endereco.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.endereco.valid || this.formulario_endereco.controls.endereco.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'numero'){
      if (this.formulario_endereco.controls.numero.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.numero.valid || this.formulario_endereco.controls.numero.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'complemento'){
      if (this.formulario_endereco.controls.complemento.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.complemento.valid || this.formulario_endereco.controls.complemento.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'bairro'){
      if (this.formulario_endereco.controls.bairro.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.bairro.valid || this.formulario_endereco.controls.bairro.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'pais'){
      if (this.formulario_endereco.controls.pais.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.pais.valid || this.formulario_endereco.controls.pais.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'cidade'){
      if (this.formulario_endereco.controls.cidade.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.cidade.valid || this.formulario_endereco.controls.cidade.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'uf'){
      if (this.formulario_endereco.controls.uf.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_endereco.controls.uf.valid || this.formulario_endereco.controls.uf.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecoPage');
  }

  public pegarCEP(event:any){
    this.Valida('cep');
    this.cep = this.formulario_endereco.value.cep;
    this.cep = (<HTMLInputElement>event.target).value;
    console.log(this.cep);
    if (this.cep.length == 8){
      this.providerCEP.getCEP(this.cep).subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_cep = objeto_retorno;
          //console.log(this.lista_cep);
        },
        error => {
          //console.log(error);
        }
      )
    }
  }

  goToPage3(){
    //console.log(this.formulario_endereco.controls.bairro);
    if (this.formulario_endereco.invalid != true){
      this.navCtrl.push(FormacaoPage);
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
    
  }

  

}
