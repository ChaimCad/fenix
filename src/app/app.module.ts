import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Platform } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HotsitePage } from '../pages/hotsite/hotsite';
import { HotsitePageModule } from '../pages/hotsite/hotsite.module';

import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}

export const default_language = 'es-es';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HotsitePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule, 
    TranslateModule.forRoot({
      loader: {
        provide:TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HotsitePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

  constructor(platform: Platform, translate: TranslateService)
  {
    translate.setDefaultLang(default_language);
    let browserLanguage = translate.getBrowserLang() || default_language;
    //alert(browserLanguage);
    translate.use(browserLanguage.toLowerCase());
  }
}
