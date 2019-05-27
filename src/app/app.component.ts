import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HotsitePage } from '../pages/hotsite/hotsite';
import { Curriculo1Page } from '../pages/pags_curriculo/curriculo1/curriculo1';
import { AboutPage } from '../pages/about/about';
import { DadosPessoaisPage } from '../pages/pags_curriculo/dados-pessoais/dados-pessoais';
import { EnderecoPage } from '../pages/pags_curriculo/endereco/endereco';

import { AreaAtuacaoPage } from '../pages/pags_curriculo/area-atuacao/area-atuacao';

import { QualificacoesPage } from '../pages/pags_curriculo/qualificacoes/qualificacoes';
import { FormacaoPage } from '../pages/pags_curriculo/formacao/formacao';
import { InfoAddPage } from '../pages/pags_curriculo/info-add/info-add';
import { CurriculoPage } from '../pages/curriculo/curriculo';
import { IntroPage } from '../pages/intro/intro';
import { CandidatosPage } from '../pages/candidatos/candidatos';
import { ViewCurriculoPage } from '../pages/view-curriculo/view-curriculo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = AreaAtuacaoPage;
  rootPage:any = ViewCurriculoPage;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
