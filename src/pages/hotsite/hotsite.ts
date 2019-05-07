import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser';


/**
 * Generated class for the HotsitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotsite',
  templateUrl: 'hotsite.html',
})
export class HotsitePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private titleService: Title) {
  }

  ionViewDidLoad() {
    this.titleService.setTitle('Fenix');
  }

}
