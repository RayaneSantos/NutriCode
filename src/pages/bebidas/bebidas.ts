import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VitaminasPage } from '../vitaminas/vitaminas';
import { SucosPage } from '../sucos/sucos';


/**
 * Generated class for the BebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BebidasPage');
  }

  goToVitaminasPage(){
  	this.navCtrl.push(VitaminasPage);
  }

  goToSucosPage(){
    this.navCtrl.push(SucosPage);
  }

}
