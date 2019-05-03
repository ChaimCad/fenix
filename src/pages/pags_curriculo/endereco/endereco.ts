import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiCepProvider } from '../../../providers/api-cep/api-cep';
import { Endereco } from '../endereco/endereco-model'
import { AreaAtuacaoPage } from '../area-atuacao/area-atuacao';

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

  public cep:string = '';

  

  public lista_cep:Array<any> = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public providerCEP:ApiCepProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecoPage');
  }

  public pegarCEP(event:any){
    this.cep = (<HTMLInputElement>event.target).value;
    console.log(this.cep);
    if (this.cep.length == 8){
      this.providerCEP.getCEP(this.cep).subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_cep = objeto_retorno
          console.log(this.lista_cep);
        },
        error => {
          console.log(error);
        }
      )
    }
    else{
      
    }
  }

  goToPage3(){
    //console.log(this.formulario.controls.nome)
    this.navCtrl.push(AreaAtuacaoPage);
  }


}
