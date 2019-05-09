import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { directive } from '@angular/core/src/render3/instructions';
import { AlertController } from 'ionic-angular';

import { QualificacoesPage } from '../qualificacoes/qualificacoes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InfoAddPage } from '../info-add/info-add';

/**
 * Generated class for the AreaAtuacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-atuacao',
  templateUrl: 'area-atuacao.html',
})
export class AreaAtuacaoPage {

  public cont = 0;
  public invalido:boolean = true;

  public cor:boolean = false;

  public area22:string = '';
  public curso22: string = '';
  public area33:string = '';
  public curso33: string = '';

  public nome_instituicao:string;
  public escolaridade:string;

  public cont2 = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.nome_instituicao = this.navParams.get('param1');
    this.escolaridade = this.navParams.get('param2');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaAtuacaoPage');
  }

  public formulario_atuacao:FormGroup = new FormGroup({
    'area1' : new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'area2': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'area3': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'curso1': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'curso2': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')]),
    'curso3': new FormControl(null, [ Validators.minLength(2), Validators.maxLength(50), Validators.pattern('[ A-Za-zÀ-ú ]*')])
  })

  valida(name: string)
  {
    if(name == 'atuacao1')
    {
      if (this.formulario_atuacao.controls.area1.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_atuacao.controls.area1.valid || this.formulario_atuacao.controls.area1.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
      }

    if(name == 'atuacao2')
    {
      if (this.formulario_atuacao.controls.area2.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_atuacao.controls.area2.valid || this.formulario_atuacao.controls.area2.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
     }

    if(name == 'atuacao3')
    {
      if (this.formulario_atuacao.controls.area3.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_atuacao.controls.area3.valid || this.formulario_atuacao.controls.area3.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }

    if(name == 'curso1')
    {
      if (this.formulario_atuacao.controls.curso1.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_atuacao.controls.curso1.valid || this.formulario_atuacao.controls.curso1.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }

    if(name == 'curso2')
    {
      if (this.formulario_atuacao.controls.curso2.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_atuacao.controls.curso2.valid || this.formulario_atuacao.controls.curso2.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }

    if(name == 'curso3')
    {
      if (this.formulario_atuacao.controls.curso3.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario_atuacao.controls.curso3.valid || this.formulario_atuacao.controls.curso3.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
  }

  goToPage5(){

    var a:boolean = true;

    if (this.invalido == false){
      if (this.formulario_atuacao.invalid == false){
        let alert = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: 'Preencha todos os campos corretamente.',
          buttons: ['Ok']
        });
        alert.present();
      }
      else
      {
        a = false;
        this.navCtrl.push(InfoAddPage);
      }
      
    }

    
    else if ((this.formulario_atuacao.invalid == false) && a == true){

      if (this.escolaridade == 'Ensino Técnico' || this.escolaridade == 'Ensino Superior'){
        this.cor = true;
        this.navCtrl.push(QualificacoesPage, {
          param1: this.nome_instituicao,
          param2: this.formulario_atuacao.value.curso1,
          param3: this.cor
        });
      }
      else
      {
        this.navCtrl.push(QualificacoesPage);
      }
    }

   
    else 
    {
      if (a == true){
        let alert = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: 'Preencha todos os campos corretamente.',
          buttons: ['Ok']
        });
        alert.present();
      }
      
    }
  }

  cria(){
   this.cont++;
   //console.log(this.cont)
   if (this.cont==1){
     document.getElementById('sec1').style.display='unset';
     document.getElementById('btn_menos').style.display='unset';
   }
   if (this.cont==2){
    document.getElementById('sec2').style.display='unset';
  }

  if (this.cont > 2){
    const alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'Só é possível inserir três áreas de atuação e três cursos.',
      buttons: ['OK']
    });
    alert.present();
    
  }
    
  }

  apaga(){
    this.cont--;
    if (this.cont==1){
      document.getElementById('sec2').style.display='none';
      this.curso33 = this.formulario_atuacao.value.curso3;
      this.curso33 = null;

      this.area33 = this.formulario_atuacao.value.area3;
      this.area33 = null;
    
    }
    if (this.cont==0)
    {
      document.getElementById('sec1').style.display='none';
      document.getElementById('btn_menos').style.display='none';
      this.curso22 = this.formulario_atuacao.value.curso2;
      this.curso22 = null;

      this.area22 = this.formulario_atuacao.value.area2;
      this.area22 = null;
    }
  }

 nao_possuo(){
   this.cont++;
   if((this.cont % 2)==0)
      this.invalido = true;
   else
     this.invalido = false; 
 }
  

}
