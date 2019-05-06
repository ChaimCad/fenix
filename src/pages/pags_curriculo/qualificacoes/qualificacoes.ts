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

  public Validaçoes(name:string)
  {
    if (name == 'curso'){
      if (this.formulario.controls.curso.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario.controls.curso.valid || this.formulario.controls.curso.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'nome_inst'){
      if (this.formulario.controls.nome_inst.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario.controls.nome_inst.valid || this.formulario.controls.nome_inst.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'tipo_curs'){
      if (this.formulario.controls.tipo_curs.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario.controls.tipo_curs.valid || this.formulario.controls.tipo_curs.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
    if (name == 'desc'){
      if (this.formulario.controls.desc.valid)
        document.getElementById('lbl_'+ name).style.color='#32db64';
      else if (!this.formulario.controls.desc.valid || this.formulario.controls.desc.touched)
        document.getElementById('lbl_'+ name).style.color='#f53d3d';
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad QualificacoesPage');
  }

}
