import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QualificacoesPage } from './qualificacoes';

@NgModule({
  declarations: [
    QualificacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(QualificacoesPage),
  ],
})
export class QualificacoesPageModule {}
