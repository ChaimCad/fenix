import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurriculoPage } from './curriculo';

@NgModule({
  declarations: [
    CurriculoPage,
  ],
  imports: [
    IonicPageModule.forChild(CurriculoPage),
  ],
})
export class CurriculoPageModule {}
