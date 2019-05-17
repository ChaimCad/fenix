import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppModule } from '../../app/app.module';
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


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
 
  
  

  public linguagem:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private titleService: Title, public translate: TranslateService) {
    /*translate.setDefaultLang(this.default_language);
    let browserLanguage = translate.getBrowserLang() || this.default_language;
    //alert(browserLanguage);
    translate.use(browserLanguage.toLowerCase());*/
  }
  /*public language: FormGroup = new FormGroup({
    'pt-br': new FormControl(null,[Validators.required]),
    'en-us': new FormControl(null,[Validators.required]),
    'es-es': new FormControl(null,[Validators.required]),
    'fr-fr': new FormControl(null,[Validators.required])
  });*/

  translate1(){
   if(this.linguagem == 'Português' || this.linguagem == 'Accueil' || this.linguagem == 'Portugués' || this.linguagem == 'Portuguese' ){
     this.translate.use("pt-br");   
   }
   if(this.linguagem == 'Inglês' || this.linguagem == 'English' || this.linguagem == 'Inglés' ||  this.linguagem == 'Anglais' ){
    this.translate.use("en-us");
  }
  if(this.linguagem == 'Espanhol' || this.linguagem == 'Spanish' || this.linguagem == 'Español' || this.linguagem == 'Espagnol'){
    this.translate.use("es-es");
  }
  if(this.linguagem == 'Francês' || this.linguagem == 'French' || this.linguagem == 'Francés' || this.linguagem == 'Le français'){
    this.translate.use("fr-fr");
  }
  }

  language = [
    'Português', 'Inglês', 'Espanhol', 'Francês'
  ]

  /*
    <div [formGroup]="myGroup">
      <input formControlName="firstName">
    </div>

    In your class:

    this.myGroup = new FormGroup({
       firstName: new FormControl()
    });
  */

  ionViewDidLoad() {
    
    }
  }
