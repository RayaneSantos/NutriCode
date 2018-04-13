import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { RoutePage } from '../route/route';

declare var google: any;
declare var geolib: any;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, private geolocation: Geolocation, alertCtrl: AlertController) {

  }

  openRoute(){
    this.navCtrl.push(RoutePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
    this.initPage();
  }

  private initPage(){
    this.loadMap(-3.7253282,-38.5543709);
  }

  private loadMap(lat,long){
  let latLng = new google.maps.LatLng(lat,long);

    let mapOptions = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let element = document.getElementById('map');

    let map = new google.maps.Map(element, mapOptions);

    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.BOUNCE
    });

    marker.setMap(map);
  }

}
