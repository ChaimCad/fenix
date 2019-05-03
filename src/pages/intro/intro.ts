import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InicioPage } from '../inicio/inicio';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  public loader;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
    this.presentLoading();
   

  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
     // content: "Por favor aguarde...",

     spinner:'circles',

      dismissOnPageChange: true
     
    });
    this.loader.present();

    setTimeout(() => {
      this.loader.dismiss();
      this.onDidDismiss();
    }, 3500);

    
    }

    onDidDismiss(){
      this.goToInicio();
    }

  

  closeLoading(){
    this.loader.dismiss();
  }

  goToInicio(){
    this.navCtrl.setRoot(InicioPage);
  }

}
