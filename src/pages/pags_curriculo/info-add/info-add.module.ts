import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoAddPage } from './info-add';

@NgModule({
  declarations: [
    InfoAddPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoAddPage),
  ],
})
export class InfoAddPageModule {}
