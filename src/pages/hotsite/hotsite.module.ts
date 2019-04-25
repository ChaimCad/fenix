import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotsitePage } from './hotsite';

@NgModule({
  declarations: [
    HotsitePage,
  ],
  imports: [
    IonicPageModule.forChild(HotsitePage),
  ],
})
export class HotsitePageModule {}
