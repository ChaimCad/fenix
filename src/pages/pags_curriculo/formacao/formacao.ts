import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AreaAtuacaoPage } from '../area-atuacao/area-atuacao';
import { QualificacoesPage } from '../qualificacoes/qualificacoes';
import { InfoAddPage } from '../info-add/info-add';
import { VALID } from '@angular/forms/src/model';


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
  data: string;

  public nome_instituicao: string = '';
  public data_ano:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }
  public RetornaAno() {
    var dNow = new Date();


    this.mes = dNow.getMonth()
    //return mes

    this.ano = dNow.getFullYear()
    //console.log(this.ano) 

  }


  public formulario: FormGroup = new FormGroup({
    'escolaridade': new FormControl(null, [Validators.required]),
    'nome_inst': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
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
  
  

  public Validacoes(name: string) {
    if (name == 'escolaridade') {
      if (this.formulario.controls.escolaridade.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.escolaridade.valid || this.formulario.controls.escolaridade.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
      if (this.formulario.value.escolaridade == 'Analfabeto(a)'){
        (<HTMLInputElement>document.getElementById('item_inst')).hidden = true;
        (<HTMLInputElement>document.getElementById('item_ano')).hidden = true;
      }
      else
      {
        (<HTMLInputElement>document.getElementById('item_inst')).hidden = false;
        (<HTMLInputElement>document.getElementById('item_ano')).hidden = false;
      }
    }
    if (name == 'nome_inst') {
      if (this.formulario.controls.nome_inst.valid)
        document.getElementById('lbl_' + name).style.color = '#32db64';
      else if (!this.formulario.controls.nome_inst.valid || this.formulario.controls.nome_inst.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
    if (name == 'ano') {
      if (this.formulario.controls.ano.valid){
        document.getElementById('lbl_' + name).style.color = '#32db64';
      }
        
      else if (!this.formulario.controls.ano.valid || this.formulario.controls.ano.touched)
        document.getElementById('lbl_' + name).style.color = '#f53d3d';
    }
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad FormacaoPage');
  }

  goToPage4() {
    if (this.formulario.value.escolaridade == 'Analfabeto(a)'){
      this.navCtrl.push(AreaAtuacaoPage);
    }
    else {

      if (this.formulario.value.escolaridade == "Ensino Técnico" || this.formulario.value.escolaridade == "Ensino Superior"){
        if (this.formulario.status != "INVALID"){
          this.navCtrl.push(AreaAtuacaoPage, {
            param1: this.formulario.value.nome_inst,
            param2: this.formulario.value.escolaridade
          });
        }
        else {
          let alert = this.alertCtrl.create({
            title: 'Atenção!',
            subTitle: 'Preencha todos os campos corretamente.',
            buttons: ['Ok']
          });
          alert.present();
        }
      }
      else if (this.formulario.status != "INVALID") {
          this.navCtrl.push(AreaAtuacaoPage);
        }
      else {
        let alert = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: 'Preencha todos os campos corretamente.',
          buttons: ['Ok']
        });
        alert.present();
      }
      }
      /*else{
        let alert = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: 'Preencha todos os campos corretamente.',
          buttons: ['Ok']
        });
        alert.present();
      }*/
    }
    

  }


