import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HotsitePage } from '../pages/hotsite/hotsite';
import { HotsitePageModule } from '../pages/hotsite/hotsite.module';
import { CurriculoPageModule } from '../pages/curriculo/curriculo.module';
import { ApiCepProvider } from '../providers/api-cep/api-cep';
import { HttpClientModule } from '@angular/common/http';
import { DadosPessoaisPageModule } from '../pages/pags_curriculo/dados-pessoais/dados-pessoais.module';
import { AreaAtuacaoPageModule } from '../pages/pags_curriculo/area-atuacao/area-atuacao.module';
import { FormacaoPageModule } from '../pages/pags_curriculo/formacao/formacao.module';
import { Curriculo1PageModule } from '../pages/pags_curriculo/curriculo1/curriculo1.module';
import { InfoAddPageModule } from '../pages/pags_curriculo/info-add/info-add.module';
import { QualificacoesPageModule } from '../pages/pags_curriculo/qualificacoes/qualificacoes.module';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HotsitePageModule,
    CurriculoPageModule,
    HttpClientModule,
    DadosPessoaisPageModule,
    AreaAtuacaoPageModule,
    FormacaoPageModule,
    Curriculo1PageModule,
    InfoAddPageModule,
    QualificacoesPageModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiCepProvider
  ]
})
export class AppModule {}
