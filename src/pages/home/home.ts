import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

import { SanduichesPage } from '../sanduiches/sanduiches';
import { CrepiocasPage } from '../crepiocas/crepiocas';
import { SalgadosPage } from '../salgados/salgados';
import { VitaminasPage } from '../vitaminas/vitaminas';
import { SucosPage } from '../sucos/sucos';
import { CremesPage } from '../cremes/cremes';
import { PromocoesPage } from '../promocoes/promocoes';
import { FidelidadePage } from '../fidelidade/fidelidade';
import { MapsPage } from '../maps/maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private call: CallNumber) {

  }

  async callNumber():Promise<any>{
    try{
      await this.call.callNumber('08530383095', true);
    }
    catch(e){
      console.error(e);
    }
  }

  openMaps(){
    this.navCtrl.push(MapsPage);
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

  openSanduiches(){
  	this.navCtrl.push(SanduichesPage);
  }

  openCrepiocas(){
  	this.navCtrl.push(CrepiocasPage);
  }

  openSalgados(){
    this.navCtrl.push(SalgadosPage);
  }

  openVitaminas(){
    this.navCtrl.push(VitaminasPage);
  }

  openSucos(){
    this.navCtrl.push(SucosPage);
  }

  openCremes(){
    this.navCtrl.push(CremesPage);
  }

  openPromocoes(){
    this.navCtrl.push(PromocoesPage);
  }

  openFidelidade(){
    this.navCtrl.push(FidelidadePage);
  }

}
