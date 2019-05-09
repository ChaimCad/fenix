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
import { IntroPageModule } from '../pages/intro/intro.module';
import { LoginPageModule } from '../pages/login/login.module';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { CadastroPageModule } from '../pages/cadastro/cadastro.module';
import { SideMenuPageModule } from '../pages/side-menu/side-menu.module';

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
    IntroPageModule,
    LoginPageModule,
    InicioPageModule,
    CadastroPageModule,
    SideMenuPageModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
