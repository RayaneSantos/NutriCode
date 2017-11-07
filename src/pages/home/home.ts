import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SanduichesPage } from '../sanduiches/sanduiches';
import { CrepiocasPage } from '../crepiocas/crepiocas';
import { PromocoesPage } from '../promocoes/promocoes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openSanduiches(){
  	this.navCtrl.push(SanduichesPage);
  }

  openCrepiocas(){
  	this.navCtrl.push(CrepiocasPage);
  }

  openPromocoes(){
    this.navCtrl.push(PromocoesPage);
  }

}
