import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SanduichesPage } from '../sanduiches/sanduiches';
import { SalgadosPage } from '../salgados/salgados';
import { CrepiocasPage } from '../crepiocas/crepiocas';

/**
 * Generated class for the LanchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  goToSanduichesPage(){
  	this.navCtrl.push(SanduichesPage);
  }

  goToSalgadosPage(){
    this.navCtrl.push(SalgadosPage);
  }

  goToCrepiocasPage(){
    this.navCtrl.push(CrepiocasPage);
  }
}
