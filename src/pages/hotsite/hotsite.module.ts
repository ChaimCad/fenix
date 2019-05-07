import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotsitePage } from './hotsite';
import { Title } from '@angular/platform-browser';

@NgModule({
  declarations: [
    HotsitePage,
  ],
  providers:[
    Title
  ],
  imports: [
    IonicPageModule.forChild(HotsitePage),
  ],
})
export class HotsitePageModule {}
