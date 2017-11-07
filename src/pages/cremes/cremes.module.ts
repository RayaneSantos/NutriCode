import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CremesPage } from './cremes';

@NgModule({
  declarations: [
    CremesPage,
  ],
  imports: [
    IonicPageModule.forChild(CremesPage),
  ],
})
export class CremesPageModule {}
