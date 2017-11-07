import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SanduichesPage } from './sanduiches';

@NgModule({
  declarations: [
    SanduichesPage,
  ],
  imports: [
    IonicPageModule.forChild(SanduichesPage),
  ],
})
export class SanduichesPageModule {}
